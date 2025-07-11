include ../config.mk

# Tool definitions
XSCHEM = xschem
NGSPICE = ngspice

.PHONY: all schematic spice clean setup

setup:
	@echo "Setting up symbol files..."
	@echo "Ignore errors below this ================"
	mv ../../schematics/*.sym ../../symbols/ 2>/dev/null || true; \
	mv ../../schematics/*_tb.sch ../../schematics/testbenches/ 2>/dev/null || true; \
	mv spice/*_tb.spice spice/testbenches/ 2>/dev/null || true;
	@echo "Ignore errors above this ================"

schematic: setup
	@echo "Opening xschem..."
	@if [ ! -f "../../schematics/$(TOP_SCHEMATIC).sch" ]; then \
		echo "Creating empty schematic file: $(TOP_SCHEMATIC).sch"; \
		touch ../../schematics/$(TOP_SCHEMATIC).sch; \
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

clean:
	@echo "Cleaning generated files..."
	@rm -rf ../../netlist/*.spice
	@echo "Clean complete"
