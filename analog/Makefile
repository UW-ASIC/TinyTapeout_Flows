PROJECT = template
PDK_ROOT = $(HOME)/.volare/sky130A
TOOLS_DIR = ../.tools
XSCHEM = xschem
NGSPICE = ngspice
MAGIC = magic
NETGEN = netgen
CACE = cace
OPENLANE = openlane
CARAVEL_ROOT = caravel

# Default targets
FILE_NAME ?= inverter
TOP_SCHEMATIC ?= $(PROJECT)

.PHONY: schematic layout magic_lvs magic_parasitics klayout_lvs klayout_parasitics cace_testing clean help

# Default target
all: help

help:
	@echo "Available targets:"
	@echo "  schematic          - Open xschem for schematic design"
	@echo "  layout        - Open magic for layout"
	@echo "  magic_lvs          - Run LVS using magic/netgen"
	@echo "  magic_parasitics   - Extract parasitics using magic"
	@echo "  klayout_lvs        - Run LVS using klayout"
	@echo "  klayout_parasitics - Extract parasitics using klayout"
	@echo "  cace_testing       - Run CACE characterization"
	@echo "  netgen             - Run netgen LVS"
	@echo "  clean              - Clean generated files"

# Schematic-Level Tasks
schematic:
	@echo "Opening xschem..."
	cd xschem && $(XSCHEM)

# Layout-Level Tasks
layout:
	@echo "Opening magic for layout..."
	@mkdir -p ./magic
	cd magic && $(MAGIC) -rcfile $(PDK_ROOT)/libs.tech/magic/sky130A.magicrc; \

magic_lvs:
	@echo "Running LVS with magic/netgen..."
	@if [ ! -f "./magic/$(PROJECT).mag" ]; then \
		echo "Error: Layout file ./magic/$(PROJECT).mag not found."; \
		exit 1; \
	fi
	@if [ ! -f "./netlist/$(PROJECT).spice" ]; then \
		echo "Error: Schematic netlist ./netlist/$(PROJECT).spice not found."; \
		exit 1; \
	fi
	cd magic && $(NETGEN) -batch lvs "$(PROJECT).mag $(PROJECT)" "../netlist/$(PROJECT).spice $(PROJECT)"

magic_parasitics:
	@echo "Extracting parasitics with magic..."
	@if [ ! -f "./magic/$(PROJECT).mag" ]; then \
		echo "Error: Layout file ./magic/$(PROJECT).mag not found."; \
		exit 1; \
	fi
	cd magic && echo "extract all; ext2spice lvs; ext2spice cthresh 0; ext2spice rthresh 0; ext2spice; quit" | \
		$(MAGIC) -rcfile $(PDK_ROOT)/libs.tech/magic/sky130A.magicrc -noc $(PROJECT).mag

klayout_lvs:
	@echo "Running LVS with klayout..."
	@if [ ! -f "./magic/$(PROJECT).gds" ]; then \
		echo "Error: GDS file ./magic/$(PROJECT).gds not found."; \
		exit 1; \
	fi
	@if [ ! -f "./netlist/$(PROJECT).spice" ]; then \
		echo "Error: Schematic netlist ./netlist/$(PROJECT).spice not found."; \
		exit 1; \
	fi
	klayout -b -r $(PDK_ROOT)/libs.tech/klayout/lvs/sky130.lylvs \
		-rd input_layout=./magic/$(PROJECT).gds \
		-rd schematic=./netlist/$(PROJECT).spice \
		-rd report=./$(PROJECT)_lvs.lyrdb

klayout_parasitics:
	@echo "Extracting parasitics with klayout..."
	@if [ ! -f "./magic/$(PROJECT).gds" ]; then \
		echo "Error: GDS file ./magic/$(PROJECT).gds not found."; \
		exit 1; \
	fi
	klayout -b -r $(PDK_ROOT)/libs.tech/klayout/drc/sky130A_mr.drc \
		-rd input=./magic/$(PROJECT).gds \
		-rd report=./$(PROJECT)_drc.lyrdb

# Verification
cace_testing:
	@echo "Running CACE characterization..."
	@if [ ! -f "./cace/$(PROJECT).yaml" ] && [ ! -f "./cace.yaml" ]; then \
		echo "Error: CACE specification file not found."; \
		echo "Looking for: ./cace/$(PROJECT).yaml or ./cace.yaml"; \
		exit 1; \
	fi
	@if [ -f "./cace/$(PROJECT).yaml" ]; then \
		$(CACE) ./cace/$(PROJECT).yaml --source=rcx; \
	else \
		$(CACE) ./cace.yaml --source=rcx; \
	fi

clean:
	@echo "Cleaning generated files..."
	rm -rf ./netlist/*.spice
	rm -rf ./magic/*.ext ./magic/*.spice ./magic/*.sim
	rm -rf ./tinytapeout/
	rm -rf ./*_lvs.lyrdb ./*_drc.lyrdb ./*_netgen_lvs.out
	rm -rf ./openlane/runs/
	find . -name "*.log" -delete
	find . -name "*.bak" -delete
	@echo "Clean complete"
