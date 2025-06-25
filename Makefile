# Mixed-Signal ASIC Design Flow Master Makefile
# Orchestrates the complete workflow from digital/analog design to verification

# Configuration
DESIGN_NAME ?= mixed_signal_top
DIGITAL_BLOCK ?= digital_core
ANALOG_BLOCK ?= opamp
PDK ?= sky130A

# Directories
DIGITAL_DIR = $(shell pwd)/digital
ANALOG_DIR = $(shell pwd)/analog
INTEGRATION_DIR = $(shell pwd)/integration
VERIFICATION_DIR = $(shell pwd)/verification

.PHONY: all setup digital analog integration verification clean help

# Default target
all: help

help:
	@echo "Mixed-Signal ASIC Design Flow"
	@echo "============================"
	@echo ""
	@echo "Complete Design Flow:"
	@echo "  complete_flow    - Run the entire design flow from start to finish"
	@echo ""
	@echo "Individual Stage Commands:"
	@echo "  setup            - Create all necessary directories"
	@echo "  digital          - Run digital design flow (RTL to GDS)"
	@echo "  analog           - Run analog design flow (schematic to layout)"
	@echo "  integration      - Integrate digital and analog blocks"
	@echo "  verification     - Run verification on the integrated design"
	@echo ""
	@echo "Utility Commands:"
	@echo "  clean            - Clean all generated files"
	@echo ""
	@echo "Examples:"
	@echo "  make complete_flow DESIGN_NAME=my_chip DIGITAL_BLOCK=counter ANALOG_BLOCK=opamp"

# Setup all directories
setup:
	@echo "Setting up project directories..."
	@mkdir -p $(DIGITAL_DIR)/src $(DIGITAL_DIR)/testbench $(DIGITAL_DIR)/results
	@mkdir -p $(ANALOG_DIR)/schematics $(ANALOG_DIR)/layout $(ANALOG_DIR)/netlists
	@mkdir -p $(INTEGRATION_DIR)
	@mkdir -p $(VERIFICATION_DIR)
	@echo "Project directories created"

# Complete flow from start to finish
complete_flow: digital analog integration verification
	@echo "====================================================="
	@echo "Complete mixed-signal design flow finished successfully!"
	@echo "Final outputs available in:"
	@echo "  - Integration GDS: $(INTEGRATION_DIR)/$(DESIGN_NAME).gds"
	@echo "  - Verification reports: $(VERIFICATION_DIR)/reports/"
	@echo "====================================================="

# Digital design flow
digital:
	@echo "Running digital design flow for $(DIGITAL_BLOCK)..."
	@cd $(DIGITAL_DIR) && $(MAKE) lint DESIGN=$(DIGITAL_BLOCK)
	@cd $(DIGITAL_DIR) && $(MAKE) test-rtl DESIGN=$(DIGITAL_BLOCK)
	@cd $(DIGITAL_DIR) && $(MAKE) verification DESIGN=$(DIGITAL_BLOCK)
	@cd $(DIGITAL_DIR) && $(MAKE) synthesis DESIGN=$(DIGITAL_BLOCK)
	@cd $(DIGITAL_DIR) && $(MAKE) test-netlist DESIGN=$(DIGITAL_BLOCK)
	@echo "Digital design flow completed"

# Analog design flow
analog:
	@echo "Running analog design flow for $(ANALOG_BLOCK)..."
	@cd $(ANALOG_DIR) && $(MAKE) setup ANALOG_BLOCK=$(ANALOG_BLOCK)
	@echo "NOTE: Analog design requires manual schematic capture and layout."
	@echo "Please run these steps manually:"
	@echo "  1. cd $(ANALOG_DIR) && make schematic ANALOG_BLOCK=$(ANALOG_BLOCK)"
	@echo "  2. Create your schematic in xschem"
	@echo "  3. cd $(ANALOG_DIR) && make netlist ANALOG_BLOCK=$(ANALOG_BLOCK)"
	@echo "  4. cd $(ANALOG_DIR) && make simulate ANALOG_BLOCK=$(ANALOG_BLOCK)"
	@echo "  5. cd $(ANALOG_DIR) && make layout ANALOG_BLOCK=$(ANALOG_BLOCK)"
	@echo "  6. Create your layout in magic"
	@echo "  7. cd $(ANALOG_DIR) && make extract ANALOG_BLOCK=$(ANALOG_BLOCK)"
	@echo "  8. cd $(ANALOG_DIR) && make verify_analog ANALOG_BLOCK=$(ANALOG_BLOCK)"
	@echo "Once analog design is complete, continue with integration"

# Integration flow
integration: digital analog
	@echo "Running integration flow for $(DESIGN_NAME)..."
	@cd $(INTEGRATION_DIR) && $(MAKE) setup DESIGN_NAME=$(DESIGN_NAME) DIGITAL_BLOCK=$(DIGITAL_BLOCK) ANALOG_BLOCK=$(ANALOG_BLOCK)
	@cd $(INTEGRATION_DIR) && $(MAKE) check_inputs DESIGN_NAME=$(DESIGN_NAME) DIGITAL_BLOCK=$(DIGITAL_BLOCK) ANALOG_BLOCK=$(ANALOG_BLOCK)
	@cd $(INTEGRATION_DIR) && $(MAKE) floorplan DESIGN_NAME=$(DESIGN_NAME) DIGITAL_BLOCK=$(DIGITAL_BLOCK) ANALOG_BLOCK=$(ANALOG_BLOCK)
	@echo "NOTE: Integration requires manual placement and routing."
	@echo "Please run these steps manually:"
	@echo "  1. cd $(INTEGRATION_DIR) && make integrate_manual DESIGN_NAME=$(DESIGN_NAME)"
	@echo "  2. Complete the integration in magic"
	@echo "  3. cd $(INTEGRATION_DIR) && make generate_lef DESIGN_NAME=$(DESIGN_NAME)"
	@echo "  4. cd $(INTEGRATION_DIR) && make generate_netlist DESIGN_NAME=$(DESIGN_NAME)"
	@echo "  5. cd $(INTEGRATION_DIR) && make generate_gds DESIGN_NAME=$(DESIGN_NAME)"
	@echo "Once integration is complete, continue with verification"

# Verification flow
verification: integration
	@echo "Running verification flow for $(DESIGN_NAME)..."
	@cd $(VERIFICATION_DIR) && $(MAKE) setup DESIGN_NAME=$(DESIGN_NAME)
	@cd $(VERIFICATION_DIR) && $(MAKE) drc_mixed DESIGN_NAME=$(DESIGN_NAME)
	@cd $(VERIFICATION_DIR) && $(MAKE) lvs_mixed DESIGN_NAME=$(DESIGN_NAME)
	@cd $(VERIFICATION_DIR) && $(MAKE) antenna_mixed DESIGN_NAME=$(DESIGN_NAME)
	@cd $(VERIFICATION_DIR) && $(MAKE) power_analysis DESIGN_NAME=$(DESIGN_NAME)
	@cd $(VERIFICATION_DIR) && $(MAKE) emi_check DESIGN_NAME=$(DESIGN_NAME)
	@cd $(VERIFICATION_DIR) && $(MAKE) mixed_simulation DESIGN_NAME=$(DESIGN_NAME)
	@cd $(VERIFICATION_DIR) && $(MAKE) verify_interfaces DESIGN_NAME=$(DESIGN_NAME)
	@cd $(VERIFICATION_DIR) && $(MAKE) generate_report DESIGN_NAME=$(DESIGN_NAME)
	@echo "Verification flow completed"
	@echo "Verification reports available in $(VERIFICATION_DIR)/reports/"

# Clean all generated files
clean:
	@echo "Cleaning all generated files..."
	@cd $(DIGITAL_DIR) && $(MAKE) clean
	@cd $(ANALOG_DIR) && $(MAKE) clean
	@cd $(INTEGRATION_DIR) && $(MAKE) clean
	@cd $(VERIFICATION_DIR) && $(MAKE) clean
	@echo "All generated files cleaned"
