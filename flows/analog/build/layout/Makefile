include ../config.mk
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

.PHONY: layout mag2gds init_tinytapeout clean

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
