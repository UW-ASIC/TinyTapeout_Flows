# ===============================
# Project Setup
# ===============================
DESIGN_TOP := counter# Top .sv or .v file
RTL_FILES := $(shell find ../../src -name "*.v" -o -name "*.sv")
RTL_FILES_H := $(shell find ../../src -name "*.vh" -o -name "*.svh")
TB_FILES := $(shell find ../../test -name "*_tb.v" -o -name "tb_*.v")

# ===============================
# Verification Setup
# ===============================
COCOTB_TEST_FILES := $(shell find ../../test -name "test_*.py")

# Make sure these sync up, each index will be run with its partner
TOPLEVEL_TB_MODULES := tb_counter
MODULE_TESTS := test_counter
