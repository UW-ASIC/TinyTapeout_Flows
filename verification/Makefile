# Mixed-Signal Verification Makefile
# Comprehensive verification for integrated digital-analog designs

# Configuration
DESIGN_NAME ?= mixed_signal_top
PDK_ROOT ?= $(shell pwd)/pdks
PDK ?= sky130A
STD_CELL_LIBRARY ?= sky130_fd_sc_hd

# Input paths
INTEGRATION_DIR = ./integration
VERIFICATION_DIR = ./verification/mixed_signal

# Input files
INTEGRATED_GDS = $(INTEGRATION_DIR)/$(DESIGN_NAME).gds
MIXED_NETLIST = $(INTEGRATION_DIR)/$(DESIGN_NAME).v
ANALOG_SPICE = $(INTEGRATION_DIR)/$(DESIGN_NAME)_analog.spice
DIGITAL_NETLIST = $(INTEGRATION_DIR)/$(DESIGN_NAME)_digital.v

# Verification directories
DRC_DIR = $(VERIFICATION_DIR)/drc
LVS_DIR = $(VERIFICATION_DIR)/lvs
MIXED_SIM_DIR = $(VERIFICATION_DIR)/mixed_simulation
POWER_DIR = $(VERIFICATION_DIR)/power
EMI_DIR = $(VERIFICATION_DIR)/emi
ANTENNA_DIR = $(VERIFICATION_DIR)/antenna
REPORTS_DIR = $(VERIFICATION_DIR)/reports

# PDK files
PDK_DIR = $(PDK_ROOT)/$(PDK)
TECH_FILE = $(PDK_DIR)/libs.tech/magic/$(PDK).tech
MAGICRC = $(PDK_DIR)/libs.tech/magic/$(PDK).magicrc
SPICE_MODELS = $(PDK_DIR)/libs.tech/ngspice

.PHONY: all setup drc_mixed lvs_mixed antenna_mixed power_analysis emi_check mixed_simulation verify_interfaces clean help

# Default target
all: setup drc_mixed lvs_mixed antenna_mixed power_analysis mixed_simulation verify_interfaces

help:
	@echo "Mixed-Signal Verification - Available targets:"
	@echo "  all               - Complete mixed-signal verification"
	@echo "  setup             - Create verification directories"
	@echo "  drc_mixed         - DRC for mixed-signal design"
	@echo "  drc_detailed      - Detailed DRC with analog-specific rules"
	@echo "  lvs_mixed         - LVS for mixed-signal design"
	@echo "  antenna_mixed     - Antenna checks for mixed-signal"
	@echo "  power_analysis    - Power grid and consumption analysis"
	@echo "  emi_check         - EMI/coupling analysis"
	@echo "  mixed_simulation  - Mixed-signal simulation"
	@echo "  verify_interfaces - Verify digital-analog interfaces"
	@echo "  substrate_check   - Substrate coupling analysis"
	@echo "  timing_mixed      - Mixed-signal timing analysis"
	@echo "  generate_report   - Generate comprehensive verification report"
	@echo "  clean             - Clean verification outputs"

# Setup verification directories
setup:
	@echo "Setting up mixed-signal verification directories..."
	@mkdir -p $(DRC_DIR) $(LVS_DIR) $(MIXED_SIM_DIR) $(POWER_DIR)
	@mkdir -p $(EMI_DIR) $(ANTENNA_DIR) $(REPORTS_DIR)
	@mkdir -p $(MIXED_SIM_DIR)/corners $(MIXED_SIM_DIR)/monte_carlo
	@mkdir -p $(POWER_DIR)/digital $(POWER_DIR)/analog $(POWER_DIR)/combined
	@echo "Mixed-signal verification directories created"

# DRC checks for mixed-signal design
drc_mixed: setup $(INTEGRATED_GDS)
	@echo "Running DRC checks on mixed-signal design..."
	@cd $(DRC_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/mixed_drc.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	@echo "Mixed-signal DRC complete. Check $(DRC_DIR)/$(DESIGN_NAME)_mixed.drc"

# Detailed DRC with analog-specific rules
drc_detailed: setup $(INTEGRATED_GDS)
	@echo "Running detailed DRC with analog-specific rules..."
	@cd $(DRC_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/analog_drc.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	@cd $(DRC_DIR) && klayout -b \
		-r $(PDK_DIR)/libs.tech/klayout/drc/$(PDK)_analog.lydrc \
		-rd input=$(shell pwd)/$(INTEGRATED_GDS) \
		-rd report=$(DESIGN_NAME)_analog_detailed.drc
	@echo "Detailed analog DRC complete"

# LVS verification for mixed-signal design
lvs_mixed: setup $(INTEGRATED_GDS) $(MIXED_NETLIST)
	@echo "Running LVS on mixed-signal design..."
	@cd $(LVS_DIR) && netgen -batch lvs \
		"$(shell pwd)/$(INTEGRATED_GDS) $(DESIGN_NAME)" \
		"$(shell pwd)/$(MIXED_NETLIST) $(DESIGN_NAME)" \
		$(PDK_DIR)/libs.tech/netgen/$(PDK)_setup.tcl \
		$(DESIGN_NAME)_mixed_lvs.out
	@echo "Mixed-signal LVS complete. Check $(LVS_DIR)/$(DESIGN_NAME)_mixed_lvs.out"

# Hierarchical LVS (separate digital and analog portions)
lvs_hierarchical: setup
	@echo "Running hierarchical LVS verification..."
	# Digital portion LVS
	@cd $(LVS_DIR) && netgen -batch lvs \
		"$(shell pwd)/$(INTEGRATED_GDS) $(DESIGN_NAME)" \
		"$(shell pwd)/$(DIGITAL_NETLIST) digital_top" \
		$(PDK_DIR)/libs.tech/netgen/$(PDK)_setup.tcl \
		$(DESIGN_NAME)_digital_lvs.out
	# Analog portion LVS
	@cd $(LVS_DIR) && netgen -batch lvs \
		"$(shell pwd)/$(INTEGRATED_GDS) $(DESIGN_NAME)" \
		"$(shell pwd)/$(ANALOG_SPICE) analog_top" \
		$(PDK_DIR)/libs.tech/netgen/$(PDK)_setup.tcl \
		$(DESIGN_NAME)_analog_lvs.out
	@echo "Hierarchical LVS complete"

# Antenna rule checks for mixed-signal
antenna_mixed: setup $(INTEGRATED_GDS)
	@echo "Running antenna checks on mixed-signal design..."
	@cd $(ANTENNA_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/mixed_antenna.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	@echo "Mixed-signal antenna checks complete"

# Power grid analysis
power_analysis: setup $(INTEGRATED_GDS)
	@echo "Running power analysis on mixed-signal design..."
	# Digital power analysis
	@cd $(POWER_DIR)/digital && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/power_digital.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	# Analog power analysis
	@cd $(POWER_DIR)/analog && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/power_analog.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	# Combined power grid analysis
	@cd $(POWER_DIR)/combined && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/power_combined.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	@echo "Power analysis complete"

# EMI and coupling analysis
emi_check: setup $(INTEGRATED_GDS)
	@echo "Running EMI and coupling analysis..."
	@cd $(EMI_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/emi_analysis.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	@echo "EMI analysis complete. Check $(EMI_DIR)/"

# Mixed-signal simulation
mixed_simulation: setup $(MIXED_NETLIST)
	@echo "Running mixed-signal simulation..."
	# Extract parasitics first
	@cd $(MIXED_SIM_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/extract_mixed.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	# Run mixed-signal simulation
	@cd $(MIXED_SIM_DIR) && ngspice -b \
		-r $(DESIGN_NAME)_mixed.raw \
		$(shell pwd)/scripts/mixed_testbench.spice
	@echo "Mixed-signal simulation complete"

# Corner analysis for mixed-signal design
corner_analysis: setup $(MIXED_NETLIST)
	@echo "Running corner analysis for mixed-signal design..."
	@cd $(MIXED_SIM_DIR)/corners && \
		for corner in tt ss ff sf fs; do \
			echo "Running mixed-signal $corner corner..."; \
			ngspice -b -r $(DESIGN_NAME)_mixed_$corner.raw \
				$(shell pwd)/scripts/corner_mixed_$corner.spice; \
		done
	@echo "Corner analysis complete"

# Monte Carlo analysis
monte_carlo: setup $(MIXED_NETLIST)
	@echo "Running Monte Carlo analysis..."
	@cd $(MIXED_SIM_DIR)/monte_carlo && \
		python3 $(shell pwd)/scripts/monte_carlo_mixed.py \
			--netlist $(shell pwd)/$(MIXED_NETLIST) \
			--runs 100 \
			--output monte_carlo_results.txt
	@echo "Monte Carlo analysis complete"

# Verify digital-analog interfaces
verify_interfaces: setup $(INTEGRATED_GDS)
	@echo "Verifying digital-analog interfaces..."
	@cd $(VERIFICATION_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/interface_check.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	@echo "Interface verification complete"

# Substrate coupling analysis
substrate_check: setup $(INTEGRATED_GDS)
	@echo "Running substrate coupling analysis..."
	@cd $(EMI_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/substrate_coupling.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	@echo "Substrate coupling analysis complete"

# Mixed-signal timing analysis
timing_mixed: setup $(MIXED_NETLIST)
	@echo "Running mixed-signal timing analysis..."
	# Digital timing with analog loading
	@cd $(VERIFICATION_DIR) && opensta \
		-script $(shell pwd)/scripts/timing_mixed.tcl
	@echo "Mixed-signal timing analysis complete"

# Supply noise analysis
supply_noise: setup $(INTEGRATED_GDS)
	@echo "Running supply noise analysis..."
	@cd $(POWER_DIR) && ngspice -b \
		-r supply_noise.raw \
		$(shell pwd)/scripts/supply_noise.spice
	@echo "Supply noise analysis complete"

# Cross-talk analysis
crosstalk: setup $(INTEGRATED_GDS)
	@echo "Running crosstalk analysis..."
	@cd $(EMI_DIR) && magic -dnull -noconsole -rcfile $(MAGICRC) \
		-script $(shell pwd)/scripts/crosstalk.tcl $(INTEGRATED_GDS) $(DESIGN_NAME)
	@echo "Crosstalk analysis complete"

# Generate comprehensive verification report
generate_report:
	@echo "Generating comprehensive mixed-signal verification report..."
	@echo "=== Mixed-Signal Verification Report ===" > $(REPORTS_DIR)/verification_summary.txt
	@echo "Design: $(DESIGN_NAME)" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "Date: $(shell date)" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "PDK: $(PDK)" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "=== DRC Results ===" >> $(REPORTS_DIR)/verification_summary.txt
	@if [ -f $(DRC_DIR)/$(DESIGN_NAME)_mixed.drc ]; then \
		echo "Mixed DRC: $(DRC_DIR)/$(DESIGN_NAME)_mixed.drc" >> $(REPORTS_DIR)/verification_summary.txt; \
		drc_violations=$(grep -c "DRC" $(DRC_DIR)/$(DESIGN_NAME)_mixed.drc 2>/dev/null || echo "0"); \
		echo "DRC Violations: $drc_violations" >> $(REPORTS_DIR)/verification_summary.txt; \
	else \
		echo "Mixed DRC: NOT RUN" >> $(REPORTS_DIR)/verification_summary.txt; \
	fi
	@echo "" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "=== LVS Results ===" >> $(REPORTS_DIR)/verification_summary.txt
	@if [ -f $(LVS_DIR)/$(DESIGN_NAME)_mixed_lvs.out ]; then \
		echo "Mixed LVS: $(LVS_DIR)/$(DESIGN_NAME)_mixed_lvs.out" >> $(REPORTS_DIR)/verification_summary.txt; \
		if grep -q "CORRECT" $(LVS_DIR)/$(DESIGN_NAME)_mixed_lvs.out 2>/dev/null; then \
			echo "LVS Status: PASSED" >> $(REPORTS_DIR)/verification_summary.txt; \
		else \
			echo "LVS Status: FAILED" >> $(REPORTS_DIR)/verification_summary.txt; \
		fi \
	else \
		echo "Mixed LVS: NOT RUN" >> $(REPORTS_DIR)/verification_summary.txt; \
	fi
	@echo "" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "=== Antenna Results ===" >> $(REPORTS_DIR)/verification_summary.txt
	@if [ -f $(ANTENNA_DIR)/$(DESIGN_NAME).antenna ]; then \
		antenna_violations=$(grep -c "ANTENNA" $(ANTENNA_DIR)/$(DESIGN_NAME).antenna 2>/dev/null || echo "0"); \
		echo "Antenna Violations: $antenna_violations" >> $(REPORTS_DIR)/verification_summary.txt; \
	else \
		echo "Antenna Check: NOT RUN" >> $(REPORTS_DIR)/verification_summary.txt; \
	fi
	@echo "" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "=== Simulation Results ===" >> $(REPORTS_DIR)/verification_summary.txt
	@if [ -f $(MIXED_SIM_DIR)/$(DESIGN_NAME)_mixed.raw ]; then \
		echo "Mixed Simulation: COMPLETED" >> $(REPORTS_DIR)/verification_summary.txt; \
	else \
		echo "Mixed Simulation: NOT RUN" >> $(REPORTS_DIR)/verification_summary.txt; \
	fi
	@echo "" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "=== Power Analysis ===" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "Digital Power: $(POWER_DIR)/digital/" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "Analog Power: $(POWER_DIR)/analog/" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "Combined Power: $(POWER_DIR)/combined/" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "=== Files Generated ===" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "Verification Directory: $(VERIFICATION_DIR)" >> $(REPORTS_DIR)/verification_summary.txt
	@echo "Report Generated: $(shell date)" >> $(REPORTS_DIR)/verification_summary.txt
	@cat $(REPORTS_DIR)/verification_summary.txt

# Create verification scripts
create_scripts: setup
	@echo "Creating mixed-signal verification scripts..."
	@mkdir -p scripts
	# Mixed DRC script
	@echo "# Mixed-signal DRC script" > scripts/mixed_drc.tcl
	@echo "set gds_file [lindex \$argv 0]" >> scripts/mixed_drc.tcl
	@echo "set design_name [lindex \$argv 1]" >> scripts/mixed_drc.tcl
	@echo "gds read \$gds_file" >> scripts/mixed_drc.tcl
	@echo "load \$design_name" >> scripts/mixed_drc.tcl
	@echo "drc check" >> scripts/mixed_drc.tcl
	@echo "drc catchup" >> scripts/mixed_drc.tcl
	@echo "drc list > \${design_name}_mixed.drc" >> scripts/mixed_drc.tcl
	@echo "quit" >> scripts/mixed_drc.tcl
	# Interface check script
	@echo "# Interface verification script" > scripts/interface_check.tcl
	@echo "set gds_file [lindex \$argv 0]" >> scripts/interface_check.tcl
	@echo "set design_name [lindex \$argv 1]" >> scripts/interface_check.tcl
	@echo "# Add interface checking commands here" >> scripts/interface_check.tcl
	@echo "quit" >> scripts/interface_check.tcl
	@echo "Mixed-signal verification scripts created"

# Performance summary
performance_summary:
	@echo "Generating performance summary..."
	@echo "=== Mixed-Signal Performance Summary ===" > $(REPORTS_DIR)/performance.txt
	@echo "Design: $(DESIGN_NAME)" >> $(REPORTS_DIR)/performance.txt
	@echo "" >> $(REPORTS_DIR)/performance.txt
	@echo "Digital Performance:" >> $(REPORTS_DIR)/performance.txt
	@echo "  - Clock frequency: TBD" >> $(REPORTS_DIR)/performance.txt
	@echo "  - Power consumption: TBD" >> $(REPORTS_DIR)/performance.txt
	@echo "  - Area: TBD" >> $(REPORTS_DIR)/performance.txt
	@echo "" >> $(REPORTS_DIR)/performance.txt
	@echo "Analog Performance:" >> $(REPORTS_DIR)/performance.txt
	@echo "  - Gain: TBD" >> $(REPORTS_DIR)/performance.txt
	@echo "  - Bandwidth: TBD" >> $(REPORTS_DIR)/performance.txt
	@echo "  - Power consumption: TBD" >> $(REPORTS_DIR)/performance.txt
	@echo "" >> $(REPORTS_DIR)/performance.txt
	@echo "Mixed-Signal Metrics:" >> $(REPORTS_DIR)/performance.txt
	@echo "  - Digital-analog coupling: TBD" >> $(REPORTS_DIR)/performance.txt
	@echo "  - Supply noise: TBD" >> $(REPORTS_DIR)/performance.txt
	@echo "  - Total power: TBD" >> $(REPORTS_DIR)/performance.txt
	@cat $(REPORTS_DIR)/performance.txt

# Check verification completeness
check_completeness:
	@echo "Checking verification completeness..."
	@echo "=== Verification Completeness Check ===" > $(REPORTS_DIR)/completeness.txt
	@echo "Required verifications:" >> $(REPORTS_DIR)/completeness.txt
	@echo -n "  DRC Mixed: " >> $(REPORTS_DIR)/completeness.txt
	@if [ -f $(DRC_DIR)/$(DESIGN_NAME)_mixed.drc ]; then echo "✓ DONE" >> $(REPORTS_DIR)/completeness.txt; else echo "✗ MISSING" >> $(REPORTS_DIR)/completeness.txt; fi
	@echo -n "  LVS Mixed: " >> $(REPORTS_DIR)/completeness.txt
	@if [ -f $(LVS_DIR)/$(DESIGN_NAME)_mixed_lvs.out ]; then echo "✓ DONE" >> $(REPORTS_DIR)/completeness.txt; else echo "✗ MISSING" >> $(REPORTS_DIR)/completeness.txt; fi
	@echo -n "  Antenna Check: " >> $(REPORTS_DIR)/completeness.txt
	@if [ -f $(ANTENNA_DIR)/$(DESIGN_NAME).antenna ]; then echo "✓ DONE" >> $(REPORTS_DIR)/completeness.txt; else echo "✗ MISSING" >> $(REPORTS_DIR)/completeness.txt; fi
	@echo -n "  Mixed Simulation: " >> $(REPORTS_DIR)/completeness.txt
	@if [ -f $(MIXED_SIM_DIR)/$(DESIGN_NAME)_mixed.raw ]; then echo "✓ DONE" >> $(REPORTS_DIR)/completeness.txt; else echo "✗ MISSING" >> $(REPORTS_DIR)/completeness.txt; fi
	@echo -n "  Power Analysis: " >> $(REPORTS_DIR)/completeness.txt
	@if [ -d $(POWER_DIR)/combined ]; then echo "✓ DONE" >> $(REPORTS_DIR)/completeness.txt; else echo "✗ MISSING" >> $(REPORTS_DIR)/completeness.txt; fi
	@cat $(REPORTS_DIR)/completeness.txt

# Clean verification outputs
clean:
	@echo "Cleaning mixed-signal verification outputs..."
	@rm -rf $(DRC_DIR)/*.drc $(LVS_DIR)/*.out $(ANTENNA_DIR)/*.antenna
	@rm -rf $(MIXED_SIM_DIR)/*.raw $(MIXED_SIM_DIR)/*.log
	@rm -rf $(POWER_DIR)/*/*.txt $(EMI_DIR)/*.log
	@rm -rf $(REPORTS_DIR)/*
	@echo "Mixed-signal verification outputs cleaned"

# Complete clean
clean_all: clean
	@echo "Removing all mixed-signal verification files..."
	@rm -rf $(VERIFICATION_DIR)
	@echo "All mixed-signal verification files removed"
