# Tool definitions
XSCHEM = xschem
NGSPICE = ngspice

# Phony targets
.PHONY: all schematic spice clean setup

# Default target
all: setup schematic

# Setup: move symbol files to correct location
setup:
	@echo "Setting up symbol files..."
	@if [ -f ../../schematics/*.sym ]; then \
		mv ../../schematics/*.sym ../../symbols/ 2>/dev/null || true; \
	fi

# Open schematic editor
schematic: setup
	@echo "Opening xschem..."
	$(XSCHEM) $(TOP_SCHEMATIC).sch

# Run SPICE simulation
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

# Clean all generated files
clean:
	@echo "Cleaning generated files..."
	@rm -rf ../../netlist/*.spice
	@echo "Clean complete"
