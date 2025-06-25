# Analog Design Flow Makefile
# Handles schematic capture, simulation, and layout for analog blocks

# Configuration
ANALOG_BLOCK ?= opamp
PDK_ROOT ?= $(shell pwd)/pdks
PDK ?= sky130A
XSCHEM_LIB ?= $(PDK_ROOT)/$(PDK)/libs.tech/xschem

# Directories
SCH_DIR = schematics
SIM_DIR = simulations
LAYOUT_DIR = layout
NETLIST_DIR = netlists
RESULTS_DIR = results

# Files
SCHEMATIC = $(SCH_DIR)/$(ANALOG_BLOCK).sch
TESTBENCH = $(SCH_DIR)/$(ANALOG_BLOCK)_tb.sch
SPICE_NETLIST = $(NETLIST_DIR)/$(ANALOG_BLOCK).spice
TB_NETLIST = $(NETLIST_DIR)/$(ANALOG_BLOCK)_tb.spice
LAYOUT_MAG = $(LAYOUT_DIR)/$(ANALOG_BLOCK).mag
LAYOUT_GDS = $(LAYOUT_DIR)/$(ANALOG_BLOCK).gds
EXTRACTED_NETLIST = $(NETLIST_DIR)/$(ANALOG_BLOCK)_extracted.spice

# PDK files
PDK_DIR = $(PDK_ROOT)/$(PDK)
MAGICRC = $(PDK_DIR)/libs.tech/magic/$(PDK).magicrc
SPICE_MODELS = $(PDK_DIR)/libs.tech/ngspice/spinit

.PHONY: all setup schematic simulate layout extract verify_analog clean help

# Default target
all: setup schematic simulate layout extract verify_analog

help:
	@echo "Analog Design Flow - Available targets:"
	@echo "  all           - Complete analog design flow"
	@echo "  setup         - Create directory structure"
	@echo "  schematic     - Launch xschem for schematic design"
	@echo "  netlist       - Generate SPICE netlist from schematic"
	@echo "  simulate      - Run ngspice simulation"
	@echo "  layout        - Launch magic for analog layout"
	@echo "  extract       - Extract parasitics from layout"
	@echo "  verify_analog - Run analog-specific verification"
	@echo "  drc_analog    - Run DRC on analog layout"
	@echo "  lvs_analog    - Run LVS on analog block"
	@echo "  clean         - Clean all generated files"

# Setup directory structure
setup:
	@echo "Setting up analog design directories..."
	@mkdir -p $(SCH_DIR) $(SIM_DIR) $(LAYOUT_DIR) $(NETLIST_DIR) $(RESULTS_DIR)
	@mkdir -p $(SIM_DIR)/ac $(SIM_DIR)/dc $(SIM_DIR)/tran $(SIM_DIR)/corners
	@echo "Creating example schematic template..."
	@if [ ! -f $(SCHEMATIC) ]; then \
		echo "Creating template schematic: $(SCHEMATIC)"; \
		touch $(SCHEMATIC); \
	fi
	@echo "Analog directories created"

# Launch xschem for schematic design
schematic: setup
	@echo "Launching xschem for schematic design..."
	@cd $(SCH_DIR) && XSCHEM_LIBRARY_PATH=$(XSCHEM_LIB) xschem $(ANALOG_BLOCK).sch &

# Generate SPICE netlist from schematic
netlist: setup $(SCHEMATIC)
	@echo "Generating SPICE netlist from schematic..."
	@echo "load {$(ANALOG_BLOCK).sch}; save_netlist {$(ANALOG_BLOCK).spice}; exit" > $(SCH_DIR)/netlist_gen.tcl
	@cd $(SCH_DIR) && XSCHEM_LIBRARY_PATH=$(XSCHEM_LIB) xschem -b -s -r netlist_gen.tcl
	@mkdir -p $(NETLIST_DIR)
	@if [ -f $(SCH_DIR)/$(ANALOG_BLOCK).spice ]; then \
		mv $(SCH_DIR)/$(ANALOG_BLOCK).spice $(SPICE_NETLIST); \
		echo "Netlist generated: $(SPICE_NETLIST)"; \
	else \
		echo "Error: Netlist generation failed"; \
		exit 1; \
	fi
	@rm -f $(SCH_DIR)/netlist_gen.tcl

# Run ngspice simulation
simulate: netlist
	@echo "Running ngspice simulation..."
	@cd $(SIM_DIR) && ngspice -b $(shell pwd)/$(SPICE_NETLIST) \
		-o $(ANALOG_BLOCK)_sim.log
	@echo "Simulation complete. Results in $(SIM_DIR)/"

# Launch magic for analog layout
layout: setup
	@echo "Launching magic for analog layout..."
	@cd $(LAYOUT_DIR) && magic -rcfile $(MAGICRC) $(ANALOG_BLOCK).mag &

# Extract parasitics from layout
extract: $(LAYOUT_MAG)
	@echo "Extracting parasitics from layout..."
	@cd $(LAYOUT_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/extract_analog.tcl $(ANALOG_BLOCK)
	@mv $(LAYOUT_DIR)/$(ANALOG_BLOCK).ext.spice $(EXTRACTED_NETLIST)
	@echo "Extraction complete: $(EXTRACTED_NETLIST)"

# Generate GDS from layout
gds: $(LAYOUT_MAG)
	@echo "Generating GDS from layout..."
	@cd $(LAYOUT_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/gds_write.tcl $(ANALOG_BLOCK)
	@echo "GDS generated: $(LAYOUT_GDS)"

# DRC check on analog layout
drc_analog: $(LAYOUT_MAG)
	@echo "Running DRC on analog layout..."
	@cd $(LAYOUT_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/drc_analog.tcl $(ANALOG_BLOCK)
	@echo "Analog DRC complete. Check $(LAYOUT_DIR)/$(ANALOG_BLOCK).drc"

# LVS check on analog block
lvs_analog: $(EXTRACTED_NETLIST) $(SPICE_NETLIST)
	@echo "Running LVS on analog block..."
	@cd $(LAYOUT_DIR) && netgen -batch lvs \
		"$(shell pwd)/$(EXTRACTED_NETLIST) $(ANALOG_BLOCK)" \
		"$(shell pwd)/$(SPICE_NETLIST) $(ANALOG_BLOCK)" \
		$(PDK_DIR)/libs.tech/netgen/$(PDK)_setup.tcl \
		$(ANALOG_BLOCK)_lvs.out
	@echo "Analog LVS complete. Check $(LAYOUT_DIR)/$(ANALOG_BLOCK)_lvs.out"

# Complete analog verification
verify_analog: drc_analog lvs_analog
	@echo "Analog verification complete"

# Post-layout simulation with extracted parasitics
post_layout_sim: extract
	@echo "Running post-layout simulation with parasitics..."
	@cd $(SIM_DIR) && ngspice -b $(shell pwd)/$(EXTRACTED_NETLIST) \
		-o $(ANALOG_BLOCK)_post_layout.log
	@echo "Post-layout simulation complete"

# Generate analog block summary
summary:
	@echo "Generating analog block summary..."
	@echo "=== Analog Block Summary ===" > $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@echo "Block: $(ANALOG_BLOCK)" >> $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@echo "Date: $(shell date)" >> $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@echo "" >> $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@echo "Files:" >> $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@echo "  Schematic: $(SCHEMATIC)" >> $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@echo "  Layout: $(LAYOUT_MAG)" >> $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@echo "  GDS: $(LAYOUT_GDS)" >> $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@echo "  Netlist: $(SPICE_NETLIST)" >> $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@echo "  Extracted: $(EXTRACTED_NETLIST)" >> $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt
	@cat $(RESULTS_DIR)/$(ANALOG_BLOCK)_summary.txt

# Clean all generated files
clean:
	@echo "Cleaning analog design files..."
	@rm -rf $(SIM_DIR)/ac/*.raw $(SIM_DIR)/dc/*.raw $(SIM_DIR)/tran/*.raw
	@rm -rf $(SIM_DIR)/corners/*.raw $(SIM_DIR)/*.log
	@rm -rf $(LAYOUT_DIR)/*.ext $(LAYOUT_DIR)/*.drc $(LAYOUT_DIR)/*.lvs
	@rm -rf $(NETLIST_DIR)/*_extracted.spice
	@rm -rf $(RESULTS_DIR)/*
	@echo "Analog files cleaned"

# Deep clean - remove all generated content
clean_all: clean
	@echo "Deep cleaning analog design..."
	@rm -rf $(ANALOG_DIR)
	@echo "All analog files removed"
