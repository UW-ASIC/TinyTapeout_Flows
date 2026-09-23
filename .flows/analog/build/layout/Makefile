include ../config.mk

# Enforce Nix Shell
ifndef IN_NIX_SHELL
  $(error This Makefile must be run inside the nix-shell environment. Run ./env.sh first to enter the nix-shell)
endif
KLAYOUT = klayout
LAYOUT_DIR := $(shell cd ../../layout && pwd)
BUILD_DIR := $(shell pwd)

# Ensure PDK_ROOT is set
ifndef PDK_ROOT
$(error PDK_ROOT is not set. Please run from nix-shell)
endif

ifndef PDK
$(error PDK is not set. Please run from nix-shell)
endif

# === Automated place-and-route (Philis) ===
#
# Philis takes a SPICE deck plus a PDK rule deck and returns placed, routed GDS. It
# bundles GPurify for in-loop DRC, so it is checking as it places rather than handing
# you something to check afterwards.
#
# This is NOT a signoff path and should not be treated as one. On Philis's own suite a
# 2-device mirror converges in seconds while a 4-device chain has taken ~19 minutes and
# finished with DRC violations and an LVS mismatch. Use it to get a starting layout,
# then open it in magic/klayout — or write the layout by hand against macroMaster, which
# is the path that exists precisely because the automated one does not yet scale.
PHILIS ?= philis
NETLIST_DIR = ../../netlist
PNR_OUT = ../../output/pnr

# The rule deck Philis places against. Its nix package installs decks to
# share/philis/pdks next to the binary, so locate them from whatever is on PATH.
PHILIS_PDK_DIR ?= $(shell d=$$(command -v $(PHILIS) 2>/dev/null) && \
	echo "$$(dirname $$(dirname $$(readlink -f $$d)))/share/philis/pdks")
PHILIS_PDK ?= $(PHILIS_PDK_DIR)/sky130.json

.PHONY: layout mag2gds init_tinytapeout clean pnr

init_tinytapeout:
	@echo "Initializing TinyTapeout template..."
	@echo "Note: This creates a Magic .mag file that will be converted to GDS for KLayout"
	cd ../../layout && export PDK_ROOT=$(PDK_ROOT) && export PDK=$(PDK) && ( \
		echo "set TOP_LEVEL_CELL_NAME $(TOP_LAYOUT)"; \
		cat ../build/layout/tinytapeout_template.tcl; \
	) | magic -dnull -noconsole -rcfile $(PDK_ROOT)/$(PDK)/libs.tech/magic/$(PDK).magicrc -T $(PDK)
	@echo "TinyTapeout template initialized: ../../layout/$(TOP_LAYOUT).mag"
	@echo "Converting to GDS for KLayout..."
	@$(MAKE) mag2gds
	@echo "Setup complete!"

# Convert .mag to .gds (if you have legacy Magic files)
mag2gds:
	@echo "Converting Magic .mag to GDS..."
	@if [ ! -f ../../layout/$(TOP_LAYOUT).mag ]; then \
		echo "Error: $(TOP_LAYOUT).mag not found"; \
		exit 1; \
	fi
	cd ../../layout && export PDK_ROOT=$(PDK_ROOT) && export PDK=$(PDK) && ( \
		echo "load $(TOP_LAYOUT)"; \
		echo "gds write $(TOP_LAYOUT).gds"; \
		echo "quit -noprompt"; \
	) | magic -dnull -noconsole -rcfile $(PDK_ROOT)/$(PDK)/libs.tech/magic/$(PDK).magicrc -T $(PDK)
	@mkdir -p ../../output/gds
	@cp ../../layout/$(TOP_LAYOUT).gds ../../output/gds/ 2>/dev/null || true
	@echo "GDS file created: ../../layout/$(TOP_LAYOUT).gds"

layout:
	@echo "Opening layout in KLayout for editing..."
	@if [ ! -f ../../layout/$(TOP_LAYOUT).gds ]; then \
		if [ -f ../../layout/$(TOP_LAYOUT).mag ]; then \
			echo "Found .mag file, converting to GDS first..."; \
			$(MAKE) mag2gds; \
		else \
			echo "No layout file found."; \
			echo "Would you like to initialize from TinyTapeout template?"; \
			read -p "Initialize template? (y/n): " choice; \
			if [ "$$choice" = "y" ] || [ "$$choice" = "Y" ]; then \
				$(MAKE) init_tinytapeout; \
			else \
				echo "Creating blank GDS file..."; \
				echo "You can start with an empty layout or import cells from PDK"; \
			fi; \
		fi; \
	fi
	@if [ -f ../../layout/$(TOP_LAYOUT).gds ]; then \
		$(KLAYOUT) -e ../../layout/$(TOP_LAYOUT).gds; \
	else \
		$(KLAYOUT) -e; \
	fi
	@echo "Layout editing session complete"
	@if [ -n "$(PARENT_OUTPUT_DIR)" ]; then \
		echo "Exporting to parent..."; \
		mkdir -p $(PARENT_OUTPUT_DIR); \
		cp ../../layout/$(TOP_LAYOUT).gds $(PARENT_OUTPUT_DIR)/ 2>/dev/null || true; \
		cp ../../layout/$(TOP_LAYOUT).mag $(PARENT_OUTPUT_DIR)/ 2>/dev/null || true; \
		echo "Layout exported to parent project: $(PARENT_OUTPUT_DIR)"; \
	else \
		echo "Layout saved locally"; \
	fi

## pnr - place and route a deck with Philis: make pnr NETLIST=<name>
pnr:
	$(if $(NETLIST),,$(error Usage: make pnr NETLIST=<name>  # for $(NETLIST_DIR)/<name>.spice))
	@command -v $(PHILIS) >/dev/null 2>&1 || { \
		echo "philis not found on PATH — it ships in the nix shell via EDA-Packaged."; \
		exit 1; }
	@[ -f "$(NETLIST_DIR)/$(NETLIST).spice" ] || { \
		echo "No such deck: $(NETLIST_DIR)/$(NETLIST).spice"; \
		echo "Generate it first: make -C ../schematic netlist"; exit 1; }
	@[ -f "$(PHILIS_PDK)" ] || { \
		echo "No Philis rule deck at: $(PHILIS_PDK)"; \
		echo "Set PHILIS_PDK=/path/to/deck.json (sky130, gf180mcu, ihp_sg13g2, generic_finfet)."; \
		exit 1; }
	@grep -qi "^\.subckt" $(NETLIST_DIR)/$(NETLIST).spice || { \
		echo "Deck has no .subckt — Philis names the GDS after the subcircuit, so"; \
		echo "without one you get a hidden '.gds' with an empty filename."; \
		echo "Wrap the devices in '.subckt $(NETLIST) <ports>' / '.ends'."; \
		exit 1; }
	@grep -qiE "^[Mm][^ ]* +.*(nmos|pmos) *$$" $(NETLIST_DIR)/$(NETLIST).spice && { \
		echo "Deck uses generic model names (nmos/pmos)."; \
		echo "Philis resolves models against the PDK device table and needs the"; \
		echo "qualified names, e.g. sky130_fd_pr__nfet_01v8."; \
		exit 1; } || true
	@mkdir -p $(PNR_OUT)
	$(PHILIS) run $(NETLIST_DIR)/$(NETLIST).spice $(PHILIS_PDK) -o $(PNR_OUT)
	@echo "P&R output in $(PNR_OUT) — this is a starting point, not signoff."

clean:
	@echo "Cleaning generated files..."
	rm -rf ./netlist/*.spice
	rm -rf ./magic/*.ext ./magic/*.spice ./magic/*.sim
	rm -rf ./tinytapeout/
	rm -rf ./*_lvs.lyrdb ./*_drc.lyrdb ./*_netgen_lvs.out
	rm -rf ./openlane/runs/
	rm -rf ./gds_output ./reports ./magic
	rm -rf ../../layout/*.mag.bak
	rm -rf ../../output/gds/*.gds
	find . -name "*.log" -delete
	find . -name "*.bak" -delete
	@echo "Clean complete"
