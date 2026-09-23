include ../config.mk

# Enforce Nix Shell
ifndef IN_NIX_SHELL
  $(error This Makefile must be run inside the nix-shell environment. Run ./env.sh first to enter the nix-shell)
endif

# Verilog-A -> OSDI.
#
# OpenVAF compiles a .va model to a .osdi shared object that ngspice and VACASK both
# load at runtime, and SpiceRack attaches with `tb.osdi(path)`. That is the whole
# integration: a behavioural model becomes just another device the same testbenches can
# drive, rather than a separate simulation world.
#
# VerA + ESPice are the other Verilog-A stack and do not go through OSDI at all — ESPice
# compiles its models in at build time. Nothing here needs to know about that.

# openvaf-r is the name the packaged OpenVAF fork installs; plain openvaf is the
# upstream binary. Take whichever is on PATH.
OPENVAF := $(shell command -v openvaf-r 2>/dev/null || command -v openvaf 2>/dev/null)

VA_DIR = ../../va
OSDI_DIR = osdi
VA_SRCS = $(wildcard $(VA_DIR)/*.va)
OSDI_OBJS = $(patsubst $(VA_DIR)/%.va,$(OSDI_DIR)/%.osdi,$(VA_SRCS))

.PHONY: all va clean list

all: va

## va - compile every ../../va/*.va to osdi/
va: $(OSDI_OBJS)
	@if [ -z "$(VA_SRCS)" ]; then \
		echo "No .va models in $(VA_DIR)/ — nothing to compile."; \
	else \
		echo "Verilog-A models built into $(OSDI_DIR)/"; \
	fi

$(OSDI_DIR)/%.osdi: $(VA_DIR)/%.va
	@if [ -z "$(OPENVAF)" ]; then \
		echo "openvaf not found on PATH."; \
		echo "It ships in the nix shell via EDA-Packaged; re-enter ./env.sh."; \
		exit 1; \
	fi
	@mkdir -p $(OSDI_DIR)
	@echo "Compiling $< -> $@"
	@$(OPENVAF) $< -o $@

## list - show what a testbench can load
list:
	@if [ -d $(OSDI_DIR) ] && ls $(OSDI_DIR)/*.osdi >/dev/null 2>&1; then \
		for f in $(OSDI_DIR)/*.osdi; do echo "  $$(cd $$(dirname $$f) && pwd)/$$(basename $$f)"; done; \
	else \
		echo "No .osdi built yet — run 'make va'."; \
	fi

clean:
	@rm -rf $(OSDI_DIR)
	@echo "Clean complete"
