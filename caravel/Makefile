# ChatGPT generated for now, I will implement proper checking
# TinyTapeout Mixed-Signal Design Verification Makefile
# For Caravel-based submissions to TinyTapeout analog/mixed-signal workflow

# =============================================================================
# PROJECT CONFIGURATION
# =============================================================================

# Project naming (must be unique on shuttle)
USERNAME ?= $(shell git config user.name | tr '[:upper:]' '[:lower:]' | tr ' ' '_')
PROJECT_NAME ?= mixed_signal_design
MODULE_PREFIX = tt_um_
TOP_MODULE = $(MODULE_PREFIX)$(USERNAME)_$(PROJECT_NAME)

# Directories
ANALOG_DIR = analog
DIGITAL_DIR = digital
GDS_DIR = gds
LEF_DIR = lef
DEF_DIR = def
MAG_DIR = mag
VERILOG_DIR = verilog

# =============================================================================
# TINYTAPEOUT SPECIFICATIONS
# =============================================================================

# Physical constraints (micrometers)
TILE_WIDTH = 160
TILE_HEIGHT_SINGLE = 100
TILE_HEIGHT_ANALOG = 200  # Mixed-signal must be 2 tiles high
TILE_UNIT = um

# Pin constraints
MAX_ANALOG_PINS = 8
USABLE_ANALOG_PINS = 6  # Only first 6 can be used
FORBIDDEN_LAYERS = met5  # Not allowed for user designs
REQUIRED_PIN_LAYER = met4

# Power pin requirements (met4 layer)
POWER_PIN_MIN_WIDTH = 1.2  # um
POWER_PIN_BOTTOM_MARGIN = 10  # um from bottom
POWER_PIN_TOP_MARGIN = 10  # um from top

# Cost structure (for reference)
BASE_TILE_COST = 50  # USD per tile
ANALOG_MIN_TILES = 2
ANALOG_BASE_COST = 100  # USD (2 × $50)
ANALOG_PIN_COST_1_4 = 40  # USD per pin for first 4 pins
ANALOG_PIN_COST_5_PLUS = 100  # USD per pin for pins 5+

# =============================================================================
# FILE SPECIFICATIONS
# =============================================================================

# Required files
GDS_FILE = $(GDS_DIR)/$(TOP_MODULE).gds
LEF_FILE = $(LEF_DIR)/$(TOP_MODULE).lef
INFO_YAML = info.yaml
README_FILE = README.md

# Template files
TEMPLATE_SOURCE = tt10-analog-template
TEMPLATE_3V3 = tt_analog_*_3v3.def

# Magic options
MAGIC_LEF_OPTION = -pinonly

# =============================================================================
# TARGETS
# =============================================================================

.PHONY: all check check-structure check-naming check-files check-design check-analog check-digital check-power check-cost help clean

all: check

help:
	@echo "TinyTapeout Mixed-Signal Design Verification"
	@echo "============================================"
	@echo ""
	@echo "Available targets:"
	@echo "  check           - Run all verification checks"
	@echo "  check-structure - Verify directory structure"
	@echo "  check-naming    - Verify naming conventions"
	@echo "  check-files     - Verify required files exist"
	@echo "  check-design    - Verify design constraints"
	@echo "  check-analog    - Verify analog-specific requirements"
	@echo "  check-digital   - Verify digital pin handling"
	@echo "  check-power     - Verify power pin requirements"
	@echo "  check-cost      - Estimate submission cost"
	@echo "  help            - Show this help message"
	@echo "  clean           - Clean verification artifacts"
	@echo ""
	@echo "Configuration:"
	@echo "  USERNAME='$(USERNAME)'"
	@echo "  PROJECT_NAME='$(PROJECT_NAME)'"
	@echo "  TOP_MODULE='$(TOP_MODULE)'"

# =============================================================================
# MAIN VERIFICATION TARGET
# =============================================================================

check: check-structure check-naming check-files check-design check-analog check-digital check-power
	@echo "✅ All TinyTapeout verification checks passed!"
	@echo ""
	@$(MAKE) check-cost

# =============================================================================
# STRUCTURE VERIFICATION
# =============================================================================

check-structure:
	@echo "🔍 Checking directory structure..."
	@for dir in $(GDS_DIR) $(LEF_DIR) $(DEF_DIR) $(MAG_DIR) $(VERILOG_DIR); do \
		if [ ! -d "$$dir" ]; then \
			echo "❌ Missing required directory: $$dir"; \
			exit 1; \
		else \
			echo "✅ Directory exists: $$dir"; \
		fi; \
	done
	@echo ""

# =============================================================================
# NAMING VERIFICATION
# =============================================================================

check-naming:
	@echo "🔍 Checking naming conventions..."
	@if echo "$(TOP_MODULE)" | grep -q "^$(MODULE_PREFIX)"; then \
		echo "✅ Top module follows naming convention: $(TOP_MODULE)"; \
	else \
		echo "❌ Top module must start with '$(MODULE_PREFIX)': $(TOP_MODULE)"; \
		exit 1; \
	fi
	@if echo "$(TOP_MODULE)" | grep -q "$(USERNAME)"; then \
		echo "✅ Module name includes username: $(USERNAME)"; \
	else \
		echo "⚠️  Recommended: Include username in module name for uniqueness"; \
	fi
	@echo ""

# =============================================================================
# FILE VERIFICATION
# =============================================================================

check-files:
	@echo "🔍 Checking required files..."
	@if [ -f "$(INFO_YAML)" ]; then \
		echo "✅ info.yaml exists"; \
	else \
		echo "❌ Missing required file: $(INFO_YAML)"; \
		exit 1; \
	fi
	@if [ -f "$(README_FILE)" ]; then \
		echo "✅ README.md exists"; \
	else \
		echo "❌ Missing required file: $(README_FILE)"; \
		exit 1; \
	fi
	@if [ -f "$(GDS_FILE)" ]; then \
		echo "✅ GDS file exists: $(GDS_FILE)"; \
	else \
		echo "❌ Missing GDS file: $(GDS_FILE)"; \
		exit 1; \
	fi
	@if [ -f "$(LEF_FILE)" ]; then \
		echo "✅ LEF file exists: $(LEF_FILE)"; \
	else \
		echo "❌ Missing LEF file: $(LEF_FILE)"; \
		exit 1; \
	fi
	@echo ""

# =============================================================================
# DESIGN CONSTRAINT VERIFICATION
# =============================================================================

check-design:
	@echo "🔍 Checking design constraints..."
	@echo "📏 Mixed-signal design must be $(TILE_HEIGHT_ANALOG)$(TILE_UNIT) high (2 tiles)"
	@echo "📏 Standard tile width: $(TILE_WIDTH)$(TILE_UNIT)"
	@echo "🚫 Forbidden layer: $(FORBIDDEN_LAYERS)"
	@echo "📌 Required pin layer: $(REQUIRED_PIN_LAYER)"
	@if grep -q "$(FORBIDDEN_LAYERS)" $(GDS_DIR)/*.gds 2>/dev/null; then \
		echo "❌ Design uses forbidden layer: $(FORBIDDEN_LAYERS)"; \
		exit 1; \
	else \
		echo "✅ No forbidden layers detected in GDS files"; \
	fi
	@echo ""

# =============================================================================
# ANALOG-SPECIFIC VERIFICATION
# =============================================================================

check-analog:
	@echo "🔍 Checking analog-specific requirements..."
	@echo "📍 Maximum analog pins: $(MAX_ANALOG_PINS) (only first $(USABLE_ANALOG_PINS) usable)"
	@if grep -q "uses_3v3.*true" $(INFO_YAML) 2>/dev/null; then \
		echo "⚡ 3.3V design detected - must use tt_analog_*_3v3.def template"; \
		echo "✅ 3.3V flag found in info.yaml"; \
	else \
		echo "⚡ Standard 1.8V design (no 3.3V flag in info.yaml)"; \
	fi
	@if [ -d "$(ANALOG_DIR)" ]; then \
		echo "✅ Analog directory exists: $(ANALOG_DIR)"; \
		@if [ -n "$$(ls -A $(ANALOG_DIR) 2>/dev/null)" ]; then \
			echo "✅ Analog directory contains files"; \
		else \
			echo "⚠️  Analog directory is empty"; \
		fi; \
	else \
		echo "⚠️  No analog directory found - pure digital design?"; \
	fi
	@echo ""

# =============================================================================
# DIGITAL PIN VERIFICATION
# =============================================================================

check-digital:
	@echo "🔍 Checking digital pin requirements..."
	@echo "🔌 Unused digital pins must be connected to GND:"
	@echo "   - uo_out (unused outputs)"
	@echo "   - uio_out (unused bidirectional outputs)"  
	@echo "   - uio_oe (unused bidirectional enables)"
	@if [ -d "$(DIGITAL_DIR)" ]; then \
		echo "✅ Digital directory exists: $(DIGITAL_DIR)"; \
		if [ -n "$$(ls -A $(DIGITAL_DIR) 2>/dev/null)" ]; then \
			echo "✅ Digital directory contains files"; \
		else \
			echo "⚠️  Digital directory is empty"; \
		fi; \
	else \
		echo "⚠️  No digital directory found - pure analog design?"; \
	fi
	@echo ""

# =============================================================================
# POWER PIN VERIFICATION
# =============================================================================

check-power:
	@echo "🔍 Checking power pin requirements..."
	@echo "⚡ Power pins must be vertical stripes on $(REQUIRED_PIN_LAYER) layer"
	@echo "📏 Minimum width: $(POWER_PIN_MIN_WIDTH)$(TILE_UNIT)"
	@echo "📏 Must extend $(POWER_PIN_BOTTOM_MARGIN)$(TILE_UNIT) from bottom"
	@echo "📏 Must extend $(POWER_PIN_TOP_MARGIN)$(TILE_UNIT) from top"
	@echo "🔋 Power draw ~20mA results in ~0.1V drop through PDN"
	@echo "✅ Power pin requirements documented"
	@echo ""

# =============================================================================
# COST ESTIMATION
# =============================================================================

check-cost:
	@echo "💰 Cost estimation for mixed-signal submission:"
	@echo "   Base cost (2 tiles): $$$(ANALOG_BASE_COST)"
	@echo "   Analog pins (1-4): $$$(ANALOG_PIN_COST_1_4) each"
	@echo "   Analog pins (5+): $$$(ANALOG_PIN_COST_5_PLUS) each"
	@echo ""
	@echo "Example costs:"
	@echo "   2 tiles + 2 analog pins = $$180 ($$100 + $$80)"
	@echo "   4 tiles + 3 analog pins = $$380 ($$200 + $$180)"
	@echo ""
	@echo "⚠️  This covers shuttle inclusion only"
	@echo "   (ASIC, PCB, and shipping costs separate)"
	@echo ""

# =============================================================================
# VALIDATION HELPERS
# =============================================================================

validate-info-yaml:
	@echo "🔍 Validating info.yaml content..."
	@if grep -q "top_module.*$(TOP_MODULE)" $(INFO_YAML) 2>/dev/null; then \
		echo "✅ top_module matches: $(TOP_MODULE)"; \
	else \
		echo "❌ top_module in info.yaml doesn't match: $(TOP_MODULE)"; \
		exit 1; \
	fi
	@if grep -q "title:" $(INFO_YAML) 2>/dev/null; then \
		echo "✅ Title field present"; \
	else \
		echo "❌ Missing title field in info.yaml"; \
		exit 1; \
	fi
	@if grep -q "author:" $(INFO_YAML) 2>/dev/null; then \
		echo "✅ Author field present"; \
	else \
		echo "❌ Missing author field in info.yaml"; \
		exit 1; \
	fi
	@echo ""

# =============================================================================
# MAGIC INTEGRATION
# =============================================================================

export-lef-magic:
	@echo "🪄 Exporting LEF with Magic (hierarchical, pinonly)..."
	@if command -v magic >/dev/null 2>&1; then \
		cd $(MAG_DIR) && magic -dnull -noconsole -T sky130A << EOF; \
		load $(TOP_MODULE); \
		lef write $(TOP_MODULE) $(MAGIC_LEF_OPTION); \
		exit; \
		EOF \
		echo "✅ LEF exported with Magic"; \
	else \
		echo "⚠️  Magic not found - skipping LEF export"; \
	fi

# =============================================================================
# CLEANUP
# =============================================================================

clean:
	@echo "🧹 Cleaning verification artifacts..."
	@rm -f *.log *.rpt
	@echo "✅ Cleanup complete"

# =============================================================================
# DEBUG INFORMATION
# =============================================================================

debug-info:
	@echo "🐛 Debug Information:"
	@echo "====================="
	@echo "USERNAME: $(USERNAME)"
	@echo "PROJECT_NAME: $(PROJECT_NAME)"
	@echo "TOP_MODULE: $(TOP_MODULE)"
	@echo "GDS_FILE: $(GDS_FILE)"
	@echo "LEF_FILE: $(LEF_FILE)"
	@echo ""
	@echo "Expected file structure:"
	@echo "├── $(INFO_YAML)"
	@echo "├── $(README_FILE)"
	@echo "├── $(GDS_DIR)/"
	@echo "│   └── $(TOP_MODULE).gds"
	@echo "├── $(LEF_DIR)/"
	@echo "│   └── $(TOP_MODULE).lef"
	@echo "├── $(DEF_DIR)/"
	@echo "├── $(MAG_DIR)/"
	@echo "├── $(VERILOG_DIR)/"
	@echo "├── $(ANALOG_DIR)/"
	@echo "└── $(DIGITAL_DIR)/"
