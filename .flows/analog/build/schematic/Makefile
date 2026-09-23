include ../config.mk

# Enforce Nix Shell
ifndef IN_NIX_SHELL
  $(error This Makefile must be run inside the nix-shell environment. Run ./env.sh first to enter the nix-shell)
endif

# Tool definitions
XSCHEM = xschem
NGSPICE = ngspice

# PDK location. Both are exported by the nix shell; the defaults only matter if someone
# runs make with a hand-rolled environment.
PDK_ROOT ?= $(HOME)/.volare
PDK_NAME ?= $(if $(PDK),$(PDK),sky130A)
XSCHEMRC_FILE = xschemrc

# Netlist-first flow: author in DeSpice, place with cktImg, edit in xschem.
# Runs alongside the schematic-first flow above; neither depends on the other.
TOOLS_DIR = ../../../../.flows/tools
NETLIST_DIR = ../../netlist
SCHEMATIC_DIR = ../../schematics
# cktImg grid units -> xschem units. Unset uses units.scale from
# .flows/tools/xschem_sky130.json; `make import SCALE=2.5` overrides it for one run.
SCALE ?=

.PHONY: all schematic spice clean setup update-pdk netlist import deps

# xschemrc now resolves the PDK through $PDK_ROOT/$PDK, the symlink `volare enable`
# keeps pointed at the active version, so there is no version string left to rewrite.
# This target only confirms the PDK is actually there — the failure it catches used to
# surface as an xschem core dump from a Tcl `source` on a missing path.
update-pdk:
	@if [ ! -d "$(PDK_ROOT)/$(PDK_NAME)" ]; then \
		echo "❌ No PDK at $(PDK_ROOT)/$(PDK_NAME)"; \
		echo "   Run: volare enable --pdk sky130 \$$PDK_VERSION   (or re-enter ./env.sh)"; \
		exit 1; \
	fi
	@echo "📦 PDK: $(PDK_NAME) -> $$(readlink -f $(PDK_ROOT)/$(PDK_NAME))"

setup: update-pdk
	@echo "Setting up symbol files..."
	@echo "Ignore errors below this ================"
	@mv ../../schematics/*.sym ../../symbols/ 2>/dev/null || true; \
	mv ../../schematics/*_tb.sch ../../schematics/testbenches/ 2>/dev/null || true; \
	mv spice/*_tb.spice spice/testbenches/ 2>/dev/null || true;
	@echo "Ignore errors above this ================"

schematic: setup
	@echo "Opening xschem..."
	@if [ -z "$$DISPLAY" ] && [ -z "$$WAYLAND_DISPLAY" ]; then \
		echo "No DISPLAY set — xschem is a GUI and will not start."; \
		echo "Over SSH use 'ssh -X'; under WSL make sure WSLg or an X server is running."; \
		exit 1; \
	fi
	@if [ ! -s "../../schematics/$(TOP_SCHEMATIC).sch" ]; then \
		echo "Creating empty schematic file: $(TOP_SCHEMATIC).sch"; \
		printf 'v {xschem version=3.4.5 file_version=1.2}\nG {}\nK {}\nV {}\nS {}\nE {}\n' \
			> ../../schematics/$(TOP_SCHEMATIC).sch; \
	fi
	$(XSCHEM) ../../schematics/$(TOP_SCHEMATIC).sch

spice: setup
	@echo "Running SPICE simulations..."
	@if [ -d ../../netlist ]; then \
		for file in ../../netlist/*.spice; do \
			if [ -f "$$file" ]; then \
				echo "Running simulation: $$file"; \
				$(NGSPICE) -b "$$file"; \
			fi; \
		done; \
		if ! ls ../../netlist/*.spice 1> /dev/null 2>&1; then \
			echo "No SPICE files found in netlist directory"; \
		fi; \
	else \
		echo "No spice directory found"; \
	fi

# Run every DeSpice circuit under netlist/ and capture the deck it prints.
# The convention is deliberately "the script writes a netlist to stdout" rather than an
# API contract: it holds for `print(circuit)` and for `print(bench.netlist())` alike, so a
# testbench script and a plain circuit script are the same kind of thing to this Makefile.
netlist:
	@mkdir -p $(NETLIST_DIR)
	@found=0; for f in $(NETLIST_DIR)/*.py; do \
		[ -f "$$f" ] || continue; found=1; \
		out="$${f%.py}.spice"; \
		echo "Generating $$out"; \
		python3 "$$f" > "$$out" || { echo "  failed: $$f"; rm -f "$$out"; exit 1; }; \
	done; \
	if [ $$found -eq 0 ]; then echo "No .py circuits in $(NETLIST_DIR)/"; fi

# Place a deck with cktImg and write an xschem schematic you can open and edit.
# Named NETLIST=<stem>, matching netlist/<stem>.spice -> schematics/<stem>.sch.
import:
	$(if $(NETLIST),,$(error Usage: make import NETLIST=<name>  # for $(NETLIST_DIR)/<name>.spice))
	@[ -f "$(NETLIST_DIR)/$(NETLIST).spice" ] || { \
		echo "No such deck: $(NETLIST_DIR)/$(NETLIST).spice"; \
		echo "Run 'make netlist' first if it comes from a DeSpice script."; exit 1; }
	@mkdir -p $(SCHEMATIC_DIR)
	python3 $(TOOLS_DIR)/cktimg_to_xschem.py \
		$(if $(SCALE),--scale $(SCALE)) \
		$(NETLIST_DIR)/$(NETLIST).spice \
		$(SCHEMATIC_DIR)/$(NETLIST).sch
	@echo "Wrote $(SCHEMATIC_DIR)/$(NETLIST).sch — open it with: make schematic TOP_SCHEMATIC=$(NETLIST)"

## deps - build the blocks this one is built from, in the order they are listed
#
# One level only, deliberately: a dependency that itself has dependencies builds them
# when you run this in that block. Recursing here would need cycle detection to avoid
# hanging on a mutual dependency, which is a lot of Makefile for a tree that is usually
# two deep. Run it per level, or say so and it becomes a real topological walk.
deps:
	@if [ -z "$(DEPENDS)" ]; then echo "$(BLOCK): no dependencies"; exit 0; fi
	@for d in $(DEPENDS); do \
		echo "=== building dependency: $$d ==="; \
		$(MAKE) -C ../../../$$d/build/va va || exit 1; \
		$(MAKE) -C ../../../$$d/build/schematic netlist || exit 1; \
	done
	@echo "$(BLOCK): dependencies built"

clean:
	@echo "Cleaning generated files..."
	@rm -rf ../../netlist/*.spice
	@rm -f .current_pdk_version
	@rm -f $(XSCHEMRC_FILE).backup
	@echo "Clean complete"