include ../config.mk

# Tools
SIM ?= icarus
TOPLEVEL_LANG ?= verilog

# ==============================
# Setup for Multiple Tests
# ==============================
AUTO_TOPLEVEL := $(patsubst test_%.py,tb_%,$(notdir $(COCOTB_TEST_FILES)))
AUTO_MODULES := $(patsubst test_%.py,test_%,$(basename $(notdir $(COCOTB_TEST_FILES))))

# Use manual config if defined, otherwise use auto-discovery
ifeq ($(strip $(TOPLEVEL_TB_MODULES)),)
    TOPLEVEL_TB_MODULES := $(AUTO_TOPLEVEL)
endif

ifeq ($(strip $(MODULE_TESTS)),)
    MODULE_TESTS := $(AUTO_MODULES)
endif

TOPLEVEL ?= $(firstword $(TOPLEVEL_TB_MODULES))
MODULE ?= $(firstword $(MODULE_TESTS))

# Paths
BUILD_DIR := $(shell pwd)
TEST_DIR := $(shell readlink -f $(BUILD_DIR)/../../test)
SRC_DIR := $(shell readlink -f $(BUILD_DIR)/../../src)
RTL_FILES_ABS := $(shell find $(SRC_DIR) -name "*.v" -o -name "*.sv")
RTL_FILES_H_ABS := $(shell find $(SRC_DIR) -name "*.vh" -o -name "*.svh")
TB_FILES_ABS := $(shell find $(TEST_DIR) -name "*_tb.v" -o -name "tb_*.v")
VERILOG_SOURCES += $(TB_FILES_ABS)

ifneq ($(GATES),yes) # RTL Level
    SIM_BUILD = $(TEST_DIR)/sim_build/rtl
    VERILOG_SOURCES += $(RTL_FILES_ABS) $(RTL_FILES_H_ABS)
else # Gate Level
    SIM_BUILD = $(TEST_DIR)/sim_build/gl
    COMPILE_ARGS += -DGL_TEST
    COMPILE_ARGS += -DFUNCTIONAL
    COMPILE_ARGS += -DUSE_POWER_PINS
    COMPILE_ARGS += -DSIM
    COMPILE_ARGS += -DUNIT_DELAY=\#1
    VERILOG_SOURCES += $(PDK_ROOT)/sky130A/libs.ref/sky130_fd_sc_hd/verilog/primitives.v
    VERILOG_SOURCES += $(PDK_ROOT)/sky130A/libs.ref/sky130_fd_sc_hd/verilog/sky130_fd_sc_hd.v
    VERILOG_SOURCES += $(TEST_DIR)/gate_level_netlist.v
endif

# Configuration for workflow
COMPILE_ARGS += -I$(SRC_DIR)
include $(shell cocotb-config --makefiles)/Makefile.sim

.PHONY: test verification clean_all debug verification

test:
	@echo "Running single test: TOPLEVEL=$(TOPLEVEL), MODULE=$(MODULE)"
	@echo "SIM_BUILD: $(SIM_BUILD)"
	@echo "TEST_DIR: $(TEST_DIR)"
	@cd $(TEST_DIR) && \
	$(MAKE) -f $(shell cocotb-config --makefiles)/Makefile.sim \
		TOPLEVEL=$(TOPLEVEL) \
		MODULE=$(MODULE) \
		SIM=$(SIM) \
		TOPLEVEL_LANG=$(TOPLEVEL_LANG) \
		SIM_BUILD=$(SIM_BUILD) \
		COMPILE_ARGS="$(COMPILE_ARGS)" \
		VERILOG_SOURCES="$(VERILOG_SOURCES)"

# Run all tests
verification:
	@echo "Running all tests..."
	@echo "Configured tests: $(TOPLEVEL_TB_MODULES)"
	@echo "Configured modules: $(MODULE_TESTS)"
	@total_tests=$(words $(TOPLEVEL_TB_MODULES)); \
	for i in $$(seq 1 $$total_tests); do \
		toplevel_var=$$(echo "$(TOPLEVEL_TB_MODULES)" | cut -d' ' -f$$i); \
		module_var=$$(echo "$(MODULE_TESTS)" | cut -d' ' -f$$i); \
		echo ""; \
		echo "=== Running Test $$i/$$total_tests: $$toplevel_var <-> $$module_var ==="; \
		$(MAKE) test TOPLEVEL=$$toplevel_var MODULE=$$module_var || exit 1; \
	done; \
	echo ""; \
	echo "All tests completed successfully!"

define make_test_target
$(1):
	@$(MAKE) test TOPLEVEL=$(1) MODULE=$(word $(shell echo $(TOPLEVEL_TB_MODULES) | tr ' ' '\n' | grep -n '^$(1)$$' | cut -d: -f1),$(MODULE_TESTS))
endef
$(foreach top,$(TOPLEVEL_TB_MODULES),$(eval $(call make_test_target,$(top))))

clean_all:
	@echo "Additional cleanup..."
	@cd $(TEST_DIR) && rm -rf **/__pycache__ || true
	@cd $(TEST_DIR) && rm -rf *.vcd || true
	@cd $(TEST_DIR) && rm -rf results.xml || true
