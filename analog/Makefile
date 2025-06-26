PROJECT = mixed_signal_inverter

PDK_ROOT = ~/.volare/sky130A
TOOLS_DIR = ../.tools

XSCHEM = xschem
NGSPICE = ngspice
MAGIC = magic
NETGEN = netgen
CACE = cace
OPENLANE = openlane

CARAVEL_ROOT=caravel

.PHONY: open_schematic clean

# Schematic-Level Tasks

setup:
	@if [ ! -d "./xschem/xschem_library" ]; then \
		echo "Copying xschem libraries..."; \
		cp -r $(TOOLS_DIR)/src/xschem/xschem_library ./xschem/; \
	fi
	@if [ ! -f "./xschem/xschemrc" ]; then \
		echo "Copying xschemrc..."; \
		cp $(PDK_ROOT)/libs.tech/xschem/xschemrc ./xschem/; \
	fi

open_schematic:
	cd xschem && $(XSCHEM)

run_simulation: FILE_NAME

create_netlist: top_schematic


# Layout-Level Tasks

open_layout:
	cd magic && magic -rcfile ~/.volare/volare/sky130/versions/0fe599b2afb6708d281543108caf8310912f54af/sky130B/libs.tech/magic/sky130B.magicrc

magic_lvs:
magic_parasitics:
# more

klayout_lvs:
klayout_parasitics:
# more

# Integration

import_digital_netlist: DIRECTORY

# Verification

cache_testing:

netgen:

# Generate TinyTapeout Format

magic_create_tiny_asic:

clean:
