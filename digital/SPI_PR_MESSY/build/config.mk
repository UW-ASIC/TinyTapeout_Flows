# Digital Project Configuration
PROJECT = SPI_PR_MESSY
DESIGN_TOP := SPI_PR_MESSY
RTL_FILES := $$(shell find ../../../ -name "*.v" -o -name "*.sv")
RTL_FILES_H := $$(shell find ../../ -name "*.vh" -o -name "*.svh")
TB_FILES := $$(shell find ../../test -name "*_tb.v" -o -name "tb_*.v")

# This is used with XSCHEM if in mixed-signal project
TB_TOP := $$(CONFIG_DIR)../test/tb_tt_if.sv
TB_TOP_MODULE := tb_tt_if

COCOTB_TEST_FILES := $$(shell find ../../test -name "test_*.py")
TOPLEVEL_TB_MODULES := tb_SPI_PR_MESSY
MODULE_TESTS := test_SPI_PR_MESSY
PROJECT_TYPE = digital