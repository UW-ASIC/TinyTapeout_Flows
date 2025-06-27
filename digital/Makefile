DESIGN ?= counter

RTL_FILES := $(wildcard src/*.sv) $(wildcard src/*.v)
RTL_FILES_H := $(wildcard src/*.svh) $(wildcard src/*.vh)
TB_FILES := $(wildcard test/*_tb.v) $(wildcard test/tb_*.v)
COCOTB_TEST_FILES := $(wildcard test/test_*.py)

# OpenLane2 Config
OPENLANE2_ROOT ?= $(shell pwd)/openlane2
PDK ?= sky130A
PDK_ROOT ?= $(HOME)/.volare
NETLIST_DIR := ../netlist/synthesis

.PHONY: lint test test-rtl verification synthesis clean

lint:
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL for $(DESIGN)...\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL files: $(RTL_FILES)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL Headers files: $(RTL_FILES_H)\n"
	slang --top $(DESIGN) $(RTL_FILES) $(RTL_FILES_H);

synthesis: lint
	@printf "$(BLUE)[DIGITAL]$(NC) Starting synthesis for $(DESIGN) using OpenLane2...\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Using PDK: $(PDK)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Output directory: $(NETLIST_DIR)\n"
	openlane --pdk $(PDK) --pdk-root $(PDK_ROOT) \
		--run-tag $(DESIGN)_full \
		config.json

SYNTHESIZED_NETLIST := $(shell find $(SYNTHESIS_RESULTS_DIR) -name "$(DESIGN).v" -path "*/synthesis/*" 2>/dev/null | head -1)

test-rtl:
	@printf "$(BLUE)[DIGITAL]$(NC) Running RTL simulation for $(DESIGN)...\n"
	@mkdir -p simulations
	@printf "$(BLUE)[DIGITAL]$(NC) Found testbench files: $(TB_FILES)\n"
	@$(foreach tb,$(TB_FILES), \
		tb_name=$$(basename $(tb) .v); \
		printf "$(BLUE)[DIGITAL]$(NC) Running simulation with $(tb)\n"; \
		iverilog -o simulations/$${tb_name}.vvp $(RTL_FILES) $(tb); \
		if [ $$? -eq 0 ]; then \
			cd simulations && vvp $${tb_name}.vvp && cd ..; \
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
	@printf "$(BLUE)[DIGITAL]$(NC) Found RTL files: $(RTL_FILES)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Found cocotb test files: $(COCOTB_TEST_FILES)\n"
	cd test && make -b

# Run complete test suite
test: lint test-rtl verification

# Harden for fab
harden:
	..

clean:
	@printf "$(BLUE)[DIGITAL]$(NC) Cleaning generated files...\n"
	@rm -rf results
	@rm -rf test/__pycache__
	@rm -rf test/*.vcd
	@rm -rf test/sim_build
	@printf "$(GREEN)[SUCCESS]$(NC) Clean completed\n"
