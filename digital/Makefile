# Config
VERILOG_ROOT := $(shell pwd)
DESIGN ?= counter

# Cocotb test configuration
COCOTB_SIM ?= icarus
COCOTB_TOPLEVEL_LANG ?= verilog
COCOTB_TOPLEVEL ?= $(DESIGN)

# Tool paths
SLANG := slang
IVERILOG := iverilog
VVP := vvp
OPENLANE2 := openlane

# OpenLane2 configuration
OPENLANE2_ROOT ?= $(shell pwd)/openlane2
PDK ?= sky130A
PDK_ROOT ?= $(HOME)/.volare
SYNTHESIS_RESULTS_DIR := results/synthesis
NETLIST_DIR := $(SYNTHESIS_RESULTS_DIR)/$(DESIGN)

# RTL file discovery
RTL_V_FILES := $(wildcard src/*.v)
RTL_SV_FILES := $(wildcard src/*.sv)
RTL_FILES := $(RTL_V_FILES) $(RTL_SV_FILES)

# Testbench file discovery
TB_FILES_PATTERN1 := $(wildcard test/*_tb.v)
TB_FILES_PATTERN2 := $(wildcard test/tb_*.v)
TB_FILES := $(sort $(TB_FILES_PATTERN1) $(TB_FILES_PATTERN2))

# Cocotb test file discovery
COCOTB_TEST_FILES := $(wildcard test/test_*.py)

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
RED := \033[0;31m
YELLOW := \033[0;33m
NC := \033[0m

.PHONY: help lint test test-rtl verification synthesis test-netlist clean clean-synthesis

# Default target
all: help

# Help target
help:
	@echo "Digital Design Workflow"
	@echo "======================"
	@echo ""
	@echo "Design Flow Commands (use DESIGN=name):"
	@echo "  lint            - Lint RTL using slang"
	@echo "  synthesis       - Synthesize RTL to gate-level netlist using OpenLane2"
	@echo "  test-netlist    - Run gate-level simulation tests"
	@echo ""
	@echo "Simulation Commands:"
	@echo "  test-rtl        - Run RTL tests (iverilog)"
	@echo "  verification    - Run cocotb Python tests"
	@echo "  test            - Run all tests for DESIGN"
	@echo ""
	@echo "Utility Commands:"
	@echo "  clean           - Clean generated files"
	@echo "  clean-synthesis - Clean only synthesis results"
	@echo ""
	@echo "Examples:"
	@echo "  make lint DESIGN=counter"
	@echo "  make synthesis DESIGN=counter"
	@echo "  make test-netlist DESIGN=counter"
	@echo "  make verification DESIGN=counter TESTBENCH_VERIFY=tb_counter"
	@echo "  make test DESIGN=counter"

# Lint RTL using slang
lint:
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL for $(DESIGN)...\n"
ifeq ($(RTL_FILES),)
	@printf "$(RED)[ERROR]$(NC) No RTL files found in rtl/ directory\n"
	@exit 1
endif
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL files: $(RTL_FILES)\n"
	@if [ -n "$(RTL_V_FILES)" ]; then \
		$(SLANG) --top $(DESIGN) $(RTL_V_FILES) $(RTL_VH_FILES); \
		lint_result=$$?; \
	elif [ -n "$(RTL_SV_FILES)" ]; then \
		$(SLANG) --top $(DESIGN) $(RTL_SV_FILES) $(RTL_SVH_FILES); \
		lint_result=$$?; \
	else \
		printf "$(RED)[ERROR]$(NC) No RTL files found\n"; \
		exit 1; \
	fi; \
	if [ $$lint_result -eq 0 ]; then \
		printf "$(GREEN)[SUCCESS]$(NC) Linting passed for $(DESIGN)\n"; \
	else \
		printf "$(RED)[ERROR]$(NC) Linting failed for $(DESIGN)\n"; \
		exit 1; \
	fi

# Generate OpenLane2 configuration file
$(SYNTHESIS_RESULTS_DIR)/config.json: $(RTL_FILES)
	@printf "$(BLUE)[DIGITAL]$(NC) Generating OpenLane2 configuration for $(DESIGN)...\n"
	@mkdir -p $(SYNTHESIS_RESULTS_DIR)
	@echo '{' > $@
	@echo '  "PDK": "$(PDK)",' >> $@
	@echo '  "DESIGN_NAME": "$(DESIGN)",' >> $@
	@echo '  "VERILOG_FILES": [' >> $@
	@for file in $(RTL_FILES); do \
		echo '    "'$(realpath $$file)'",' >> $@; \
	done
	@sed -i '$$s/,$$//' $@
	@echo '  ],' >> $@
	@echo '  "CLOCK_PORT": "clk",' >> $@
	@echo '  "CLOCK_PERIOD": 10.0,' >> $@
	@echo '  "FP_SIZING": "absolute",' >> $@
	@echo '  "DIE_AREA": "0 0 100 100"' >> $@
	@echo '}' >> $@
	@printf "$(GREEN)[SUCCESS]$(NC) Configuration generated: $@\n"

# Synthesize RTL to gate-level netlist using OpenLane2
synthesis: $(SYNTHESIS_RESULTS_DIR)/config.json
	@printf "$(BLUE)[DIGITAL]$(NC) Starting synthesis for $(DESIGN) using OpenLane2...\n"
ifeq ($(RTL_FILES),)
	@printf "$(RED)[ERROR]$(NC) No RTL files found in rtl/ directory\n"
	@exit 1
endif
	@printf "$(BLUE)[DIGITAL]$(NC) RTL files: $(RTL_FILES)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Using PDK: $(PDK)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Output directory: $(NETLIST_DIR)\n"
	$(OPENLANE2) --pdk $(PDK) --pdk-root $(PDK_ROOT) \
		--run-tag $(DESIGN)_synthesis \
		--to Yosys.Synthesis \
		$(SYNTHESIS_RESULTS_DIR)/config.json
	@if [ $$? -eq 0 ]; then \
		printf "$(GREEN)[SUCCESS]$(NC) Synthesis completed for $(DESIGN)\n"; \
		printf "$(YELLOW)[INFO]$(NC) Gate-level netlist available in synthesis results\n"; \
		find $(SYNTHESIS_RESULTS_DIR) -name "*.v" -path "*/synthesis/*" | head -5 | while read file; do \
			printf "$(YELLOW)[INFO]$(NC) Netlist: $$file\n"; \
		done; \
	else \
		printf "$(RED)[ERROR]$(NC) Synthesis failed for $(DESIGN)\n"; \
		exit 1; \
	fi

# Find the synthesized netlist
SYNTHESIZED_NETLIST := $(shell find $(SYNTHESIS_RESULTS_DIR) -name "$(DESIGN).v" -path "*/synthesis/*" 2>/dev/null | head -1)

# Test gate-level netlist
test-netlist: synthesis
	@printf "$(BLUE)[DIGITAL]$(NC) Running gate-level simulation for $(DESIGN)...\n"
	@mkdir -p results/gate_level_sim
	@if [ -z "$(SYNTHESIZED_NETLIST)" ]; then \
		printf "$(RED)[ERROR]$(NC) No synthesized netlist found for $(DESIGN)\n"; \
		printf "$(YELLOW)[INFO]$(NC) Available netlists:\n"; \
		find $(SYNTHESIS_RESULTS_DIR) -name "*.v" 2>/dev/null || true; \
		exit 1; \
	fi
	@printf "$(BLUE)[DIGITAL]$(NC) Using netlist: $(SYNTHESIZED_NETLIST)\n"
ifeq ($(TB_FILES),)
	@printf "$(RED)[ERROR]$(NC) No testbench files found\n"
	@exit 1
endif
	@printf "$(BLUE)[DIGITAL]$(NC) Found testbench files: $(TB_FILES)\n"
	@$(foreach tb,$(TB_FILES), \
		tb_name=$$(basename $(tb) .v); \
		printf "$(BLUE)[DIGITAL]$(NC) Running gate-level simulation with $(tb)\n"; \
		$(IVERILOG) -o results/gate_level_sim/$${tb_name}_gl.vvp \
			-I$(PDK_ROOT)/$(PDK)/libs.ref/sky130_fd_sc_hd/verilog \
			$(PDK_ROOT)/$(PDK)/libs.ref/sky130_fd_sc_hd/verilog/primitives.v \
			$(PDK_ROOT)/$(PDK)/libs.ref/sky130_fd_sc_hd/verilog/sky130_fd_sc_hd.v \
			$(SYNTHESIZED_NETLIST) $(tb); \
		if [ $$? -eq 0 ]; then \
			$(VVP) results/gate_level_sim/$${tb_name}_gl.vvp; \
			if [ $$? -eq 0 ]; then \
				printf "$(GREEN)[SUCCESS]$(NC) Gate-level simulation passed for $(tb)\n"; \
			else \
				printf "$(RED)[ERROR]$(NC) Gate-level simulation failed for $(tb)\n"; \
			fi; \
		else \
			printf "$(RED)[ERROR]$(NC) Gate-level compilation failed for $(tb)\n"; \
		fi; \
	)

# RTL simulation
test-rtl:
	@printf "$(BLUE)[DIGITAL]$(NC) Running RTL simulation for $(DESIGN)...\n"
	@mkdir -p results/simulation
ifeq ($(TB_FILES),)
	@printf "$(RED)[ERROR]$(NC) No testbench files found\n"
	@exit 1
endif
	@printf "$(BLUE)[DIGITAL]$(NC) Found testbench files: $(TB_FILES)\n"
	@$(foreach tb,$(TB_FILES), \
		tb_name=$$(basename $(tb) .v); \
		printf "$(BLUE)[DIGITAL]$(NC) Running simulation with $(tb)\n"; \
		$(IVERILOG) -o results/simulation/$${tb_name}.vvp $(RTL_FILES) $(tb); \
		if [ $$? -eq 0 ]; then \
			$(VVP) results/simulation/$${tb_name}.vvp; \
			if [ $$? -eq 0 ]; then \
				printf "$(GREEN)[SUCCESS]$(NC) Simulation passed for $(tb)\n"; \
			else \
				printf "$(RED)[ERROR]$(NC) Simulation failed for $(tb)\n"; \
			fi; \
		else \
			printf "$(RED)[ERROR]$(NC) Compilation failed for $(tb)\n"; \
		fi; \
	)

# Cocotb tests
verification:
	@printf "$(BLUE)[DIGITAL]$(NC) Running cocotb tests for $(DESIGN)...\n"
ifeq ($(RTL_FILES),)
	@printf "$(RED)[ERROR]$(NC) No RTL files found in rtl/ directory\n"
	@exit 1
endif
ifeq ($(COCOTB_TEST_FILES),)
	@printf "$(RED)[ERROR]$(NC) No cocotb test files found (testbench/test_*.py)\n"
	@exit 1
endif
	@printf "$(BLUE)[DIGITAL]$(NC) Found RTL files: $(RTL_FILES)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Found cocotb test files: $(COCOTB_TEST_FILES)\n"
	cd test && make -b

# Run complete test suite
test: lint test-rtl verification

# Run complete flow including synthesis
full-flow: lint test-rtl verification synthesis test-netlist

# Clean generated files
clean:
	@printf "$(BLUE)[DIGITAL]$(NC) Cleaning generated files...\n"
	@rm -rf results
	@rm -rf testbench/__pycache__
	@rm -rf testbench/*.vcd
	@rm -rf testbench/sim_build
	@printf "$(GREEN)[SUCCESS]$(NC) Clean completed\n"

# Clean only synthesis results
clean-synthesis:
	@printf "$(BLUE)[DIGITAL]$(NC) Cleaning synthesis results...\n"
	@rm -rf $(SYNTHESIS_RESULTS_DIR)
	@printf "$(GREEN)[SUCCESS]$(NC) Synthesis clean completed\n"
