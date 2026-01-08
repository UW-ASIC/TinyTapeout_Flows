include ../config.mk

SIM ?= verilator
TOPLEVEL_LANG ?= verilog

ifndef IN_NIX_SHELL
  $(error This Makefile must be run inside the nix-shell environment. Run ./env.sh first)
endif

# Auto-discover tests from test_*.py files
AUTO_TOPLEVEL := $(patsubst test_%.py,tb_%,$(notdir $(COCOTB_TEST_FILES)))
AUTO_MODULES  := $(patsubst test_%.py,test_%,$(basename $(notdir $(COCOTB_TEST_FILES))))

# Use config.mk values if defined, otherwise use auto-discovery
ifeq ($(strip $(TOPLEVEL_TB_MODULES)),)
    TOPLEVEL_TB_MODULES := $(AUTO_TOPLEVEL)
endif

ifeq ($(strip $(MODULE_TESTS)),)
    MODULE_TESTS := $(AUTO_MODULES)
endif

TOPLEVEL ?= $(firstword $(TOPLEVEL_TB_MODULES))
MODULE   ?= $(firstword $(MODULE_TESTS))

BUILD_DIR       := $(shell pwd)
TEST_DIR        := $(shell readlink -f $(BUILD_DIR)/../../test)
SRC_DIR         := $(shell readlink -f $(BUILD_DIR)/../../src)

RTL_FILES_ABS   := $(shell find $(SRC_DIR) -name "*.v" -o -name "*.sv")
RTL_FILES_H_ABS := $(shell find $(SRC_DIR) -name "*.vh" -o -name "*.svh")
TB_FILES_ABS    := $(shell find $(TEST_DIR) -name "*_tb.v" -o -name "tb_*.v")

# ============================================================================
# Build Configuration
# ============================================================================

VERILOG_SOURCES := $(TB_FILES_ABS)

ifneq ($(GATES),yes)
    # RTL Simulation
    SIM_BUILD := $(TEST_DIR)/sim_build/rtl
    VERILOG_SOURCES += $(RTL_FILES_ABS) $(RTL_FILES_H_ABS)
else
    # Gate-Level Simulation
    SIM_BUILD := $(TEST_DIR)/sim_build/gl
    COMPILE_ARGS += -DGL_TEST -DFUNCTIONAL -DUSE_POWER_PINS -DSIM
    VERILOG_SOURCES += $(PDK_ROOT)/sky130A/libs.ref/sky130_fd_sc_hd/verilog/primitives.v
    VERILOG_SOURCES += $(PDK_ROOT)/sky130A/libs.ref/sky130_fd_sc_hd/verilog/sky130_fd_sc_hd.v
    VERILOG_SOURCES += $(TEST_DIR)/gate_level_netlist.v
endif

COMPILE_ARGS += -I$(SRC_DIR) --timing

export COMPILE_ARGS
export VERILOG_SOURCES
export SIM
export TOPLEVEL_LANG

.PHONY: test verification clean_all

# Run a single test
test:
	@echo "=== Running: $(TOPLEVEL) / $(MODULE) ==="
	@$(MAKE) -C $(TEST_DIR) -f $(shell cocotb-config --makefiles)/Makefile.sim \
		TOPLEVEL=$(TOPLEVEL) \
		MODULE=$(MODULE) \
		SIM_BUILD=$(SIM_BUILD)

# Run all configured tests
verification:
	@echo "Running all tests: $(TOPLEVEL_TB_MODULES)"
	@total=$(words $(TOPLEVEL_TB_MODULES)); \
	for i in $$(seq 1 $$total); do \
		top=$$(echo "$(TOPLEVEL_TB_MODULES)" | cut -d' ' -f$$i); \
		mod=$$(echo "$(MODULE_TESTS)" | cut -d' ' -f$$i); \
		echo ""; \
		echo "=== Test $$i/$$total: $$top / $$mod ==="; \
		$(MAKE) test TOPLEVEL=$$top MODULE=$$mod || exit 1; \
	done; \
	echo ""; \
	echo "All tests passed!"

# Clean build artifacts
clean_all:
	@echo "Cleaning..."
	@rm -rf $(TEST_DIR)/sim_build $(TEST_DIR)/__pycache__
	@rm -f $(TEST_DIR)/*.vcd $(TEST_DIR)/results.xml
