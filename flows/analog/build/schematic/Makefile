include ../config.mk

# Tool definitions
XSCHEM = xschem
NGSPICE = ngspice

# PDK auto-detection variables
PDK_ROOT = $(HOME)/.volare
VERSIONS_DIR = $(PDK_ROOT)/volare/sky130/versions
XSCHEMRC_FILE = xschemrc

.PHONY: all schematic spice clean setup update-pdk

# Function to find and update PDK version in xschemrc
define update_pdk_version
	@echo "🔍 Auto-detecting PDK version..."
	@if [ ! -d "$(VERSIONS_DIR)" ]; then \
		echo "❌ Error: Versions directory not found at $(VERSIONS_DIR)"; \
		echo "Please check if the PDK is properly installed via volare"; \
		exit 1; \
	fi; \
	AVAILABLE_VERSIONS=$$(ls -1 "$(VERSIONS_DIR)" 2>/dev/null | head -1); \
	if [ -z "$$AVAILABLE_VERSIONS" ]; then \
		echo "❌ Error: No PDK versions found in $(VERSIONS_DIR)"; \
		exit 1; \
	fi; \
	SELECTED_VERSION=$$AVAILABLE_VERSIONS; \
	echo "📦 Found PDK version: $$SELECTED_VERSION"; \
	if [ -f "$(XSCHEMRC_FILE)" ]; then \
		cp "$(XSCHEMRC_FILE)" "$(XSCHEMRC_FILE).backup" 2>/dev/null || true; \
		NEW_SOURCE_LINE="source \$$env(HOME)/.volare/volare/sky130/versions/$$SELECTED_VERSION/sky130A/libs.tech/xschem/xschemrc"; \
		sed -i "1s|^source.*|$$NEW_SOURCE_LINE|" "$(XSCHEMRC_FILE)"; \
		echo "✓ Updated xschemrc with version: $$SELECTED_VERSION"; \
		echo "$$SELECTED_VERSION" > .current_pdk_version; \
	else \
		echo "⚠️  xschemrc file not found, will be created when needed"; \
	fi
endef

update-pdk:
	$(call update_pdk_version)

setup: update-pdk
	@echo "Setting up symbol files..."
	@echo "Ignore errors below this ================"
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
	@rm -f .current_pdk_version
	@rm -f $(XSCHEMRC_FILE).backup
	@echo "Clean complete"
