# Digital-Analog Integration Makefile
# Combines digital (OpenLane2) and analog blocks into mixed-signal design

# Configuration
DESIGN_NAME ?= mixed_signal_top
DIGITAL_BLOCK ?= digital_core
ANALOG_BLOCK ?= opamp
PDK_ROOT ?= $(shell pwd)/pdks
PDK ?= sky130A

# Input paths
DIGITAL_DIR = ./openlane2/designs/$(DIGITAL_BLOCK)/runs/latest/results/final
ANALOG_DIR = ./analog/layout
INTEGRATION_DIR = ./integration

# Input files
DIGITAL_GDS = $(DIGITAL_DIR)/gds/$(DIGITAL_BLOCK).gds
DIGITAL_LEF = $(DIGITAL_DIR)/lef/$(DIGITAL_BLOCK).lef
DIGITAL_NETLIST = $(DIGITAL_DIR)/verilog/gl/$(DIGITAL_BLOCK).v
ANALOG_GDS = $(ANALOG_DIR)/$(ANALOG_BLOCK).gds
ANALOG_LEF = $(ANALOG_DIR)/$(ANALOG_BLOCK).lef
ANALOG_NETLIST = $(ANALOG_DIR)/../netlists/$(ANALOG_BLOCK).spice

# Integration outputs
INTEGRATION_LAYOUT = $(INTEGRATION_DIR)/$(DESIGN_NAME).mag
INTEGRATION_GDS = $(INTEGRATION_DIR)/$(DESIGN_NAME).gds
INTEGRATION_LEF = $(INTEGRATION_DIR)/$(DESIGN_NAME).lef
MIXED_NETLIST = $(INTEGRATION_DIR)/$(DESIGN_NAME).v
FLOORPLAN_DEF = $(INTEGRATION_DIR)/$(DESIGN_NAME).def

# PDK files
PDK_DIR = $(PDK_ROOT)/$(PDK)
MAGICRC = $(PDK_DIR)/libs.tech/magic/$(PDK).magicrc
TECH_FILE = $(PDK_DIR)/libs.tech/magic/$(PDK).tech

.PHONY: all setup check_inputs floorplan integrate_manual integrate_auto generate_lef generate_netlist clean help

# Default target
all: setup check_inputs floorplan integrate_manual generate_lef generate_netlist

help:
	@echo "Integration Flow - Available targets:"
	@echo "  all              - Complete integration flow"
	@echo "  setup            - Create integration directories"
	@echo "  check_inputs     - Verify all input files exist"
	@echo "  floorplan        - Create initial floorplan"
	@echo "  integrate_manual - Manual integration using magic"
	@echo "  integrate_auto   - Automated integration (if tools available)"
	@echo "  generate_lef     - Generate LEF from integrated layout"
	@echo "  generate_netlist - Generate mixed-signal netlist"
	@echo "  generate_gds     - Generate final GDS"
	@echo "  view_integrated  - View integrated layout"
	@echo "  clean            - Clean integration files"

# Setup integration directories
setup:
	@echo "Setting up integration directories..."
	@mkdir -p $(INTEGRATION_DIR)
	@mkdir -p $(INTEGRATION_DIR)/scripts
	@mkdir -p $(INTEGRATION_DIR)/constraints
	@mkdir -p $(INTEGRATION_DIR)/floorplan
	@echo "Integration directories created"

# Check that all required input files exist
check_inputs:
	@echo "Checking input files..."
	@if [ ! -f $(DIGITAL_GDS) ]; then echo "ERROR: Digital GDS not found: $(DIGITAL_GDS)"; exit 1; fi
	@if [ ! -f $(ANALOG_GDS) ]; then echo "ERROR: Analog GDS not found: $(ANALOG_GDS)"; exit 1; fi
	@if [ ! -f $(DIGITAL_NETLIST) ]; then echo "ERROR: Digital netlist not found: $(DIGITAL_NETLIST)"; exit 1; fi
	@if [ ! -f $(ANALOG_NETLIST) ]; then echo "ERROR: Analog netlist not found: $(ANALOG_NETLIST)"; exit 1; fi
	@echo "All input files found"

# Create floorplan for mixed-signal design
floorplan: setup check_inputs
	@echo "Creating mixed-signal floorplan..."
	@cd $(INTEGRATION_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script scripts/create_floorplan.tcl $(DESIGN_NAME)
	@echo "Floorplan created: $(INTEGRATION_DIR)/$(DESIGN_NAME)_floorplan.mag"

# Manual integration using magic
integrate_manual: setup check_inputs
	@echo "Starting manual integration in magic..."
	@echo "This will open magic for manual placement of digital and analog blocks"
	@cd $(INTEGRATION_DIR) && magic -rcfile $(MAGICRC) \
		-script scripts/load_blocks.tcl $(DESIGN_NAME) &
	@echo "Manual integration started. Save as $(DESIGN_NAME).mag when complete"

# Automated integration (using available tools)
integrate_auto: setup check_inputs
	@echo "Running automated integration..."
	@cd $(INTEGRATION_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script scripts/auto_integrate.tcl $(DESIGN_NAME)
	@echo "Automated integration complete: $(INTEGRATION_LAYOUT)"

# Generate LEF from integrated layout
generate_lef: $(INTEGRATION_LAYOUT)
	@echo "Generating LEF from integrated layout..."
	@cd $(INTEGRATION_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script scripts/generate_lef.tcl $(DESIGN_NAME)
	@echo "LEF generated: $(INTEGRATION_LEF)"

# Generate GDS from integrated layout
generate_gds: $(INTEGRATION_LAYOUT)
	@echo "Generating GDS from integrated layout..."
	@cd $(INTEGRATION_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script scripts/generate_gds.tcl $(DESIGN_NAME)
	@echo "GDS generated: $(INTEGRATION_GDS)"

# Generate mixed-signal netlist
generate_netlist: setup check_inputs
	@echo "Generating mixed-signal netlist..."
	@python3 scripts/merge_netlists.py \
		--digital $(DIGITAL_NETLIST) \
		--analog $(ANALOG_NETLIST) \
		--output $(MIXED_NETLIST) \
		--top $(DESIGN_NAME)
	@echo "Mixed-signal netlist generated: $(MIXED_NETLIST)"

# Create pin assignment file
pin_assignment: setup
	@echo "Creating pin assignment file..."
	@echo "# Pin assignments for $(DESIGN_NAME)" > $(INTEGRATION_DIR)/pins.txt
	@echo "# Format: pin_name direction layer x y" >> $(INTEGRATION_DIR)/pins.txt
	@echo "# Example:" >> $(INTEGRATION_DIR)/pins.txt
	@echo "# clk input met2 100 100" >> $(INTEGRATION_DIR)/pins.txt
	@echo "# rst input met2 200 100" >> $(INTEGRATION_DIR)/pins.txt
	@echo "# analog_out output met3 300 200" >> $(INTEGRATION_DIR)/pins.txt
	@echo "Pin assignment template created: $(INTEGRATION_DIR)/pins.txt"

# Generate power grid for mixed-signal design
power_grid: $(INTEGRATION_LAYOUT)
	@echo "Generating power grid for mixed-signal design..."
	@cd $(INTEGRATION_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script scripts/power_grid.tcl $(DESIGN_NAME)
	@echo "Power grid generated"

# View integrated layout
view_integrated: $(INTEGRATION_LAYOUT)
	@echo "Opening integrated layout in magic..."
	@cd $(INTEGRATION_DIR) && magic -rcfile $(MAGICRC) $(DESIGN_NAME).mag &

# View integrated GDS
view_gds: $(INTEGRATION_GDS)
	@echo "Opening integrated GDS in klayout..."
	@klayout $(INTEGRATION_GDS) &

# Create integration report
report:
	@echo "Generating integration report..."
	@echo "=== Mixed-Signal Integration Report ===" > $(INTEGRATION_DIR)/integration_report.txt
	@echo "Design: $(DESIGN_NAME)" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "Digital Block: $(DIGITAL_BLOCK)" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "Analog Block: $(ANALOG_BLOCK)" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "Date: $(shell date)" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "Input Files:" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "  Digital GDS: $(DIGITAL_GDS)" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "  Analog GDS: $(ANALOG_GDS)" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "Output Files:" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "  Integrated Layout: $(INTEGRATION_LAYOUT)" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "  Integrated GDS: $(INTEGRATION_GDS)" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "  Mixed Netlist: $(MIXED_NETLIST)" >> $(INTEGRATION_DIR)/integration_report.txt
	@echo "  LEF: $(INTEGRATION_LEF)" >> $(INTEGRATION_DIR)/integration_report.txt
	@cat $(INTEGRATION_DIR)/integration_report.txt

# Extract connectivity from integrated design
extract_connectivity: $(INTEGRATION_LAYOUT)
	@echo "Extracting connectivity from integrated design..."
	@cd $(INTEGRATION_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script scripts/extract_connectivity.tcl $(DESIGN_NAME)
	@echo "Connectivity extracted"

# Clean integration files
clean:
	@echo "Cleaning integration files..."
	@rm -rf $(INTEGRATION_DIR)/*.mag~ $(INTEGRATION_DIR)/*.log
	@rm -rf $(INTEGRATION_DIR)/*.ext $(INTEGRATION_DIR)/*.sim
	@rm -rf $(INTEGRATION_DIR)/integration_report.txt
	@echo "Integration files cleaned"

# Complete clean
clean_all: clean
	@echo "Removing all integration files..."
	@rm -rf $(INTEGRATION_DIR)
	@echo "All integration files removed"

# Create example scripts directory with basic TCL files
create_scripts: setup
	@echo "Creating example integration scripts..."
	@echo "# Load digital and analog blocks for manual integration" > $(INTEGRATION_DIR)/scripts/load_blocks.tcl
	@echo "# Usage: magic -rcfile \$$MAGICRC -script load_blocks.tcl design_name" >> $(INTEGRATION_DIR)/scripts/load_blocks.tcl
	@echo "set design_name [lindex \$$argv 0]" >> $(INTEGRATION_DIR)/scripts/load_blocks.tcl
	@echo "# Add your block loading commands here" >> $(INTEGRATION_DIR)/scripts/load_blocks.tcl
	@echo "Example scripts created in $(INTEGRATION_DIR)/scripts/"
