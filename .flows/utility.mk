# Status reporting functions
# Mirrors _status_digital: analog is many blocks now, not one flat project.
# library/ is skipped — it is the shared AnalogLibrary clone, not a block.
_status_analog:
	@if [ "$(HAS_ANALOG)" = "1" ]; then \
		echo "Analog Blocks:"; \
		found=0; \
		for blk in $(ANALOG_DIR)/*/; do \
			[ -d "$$blk" ] || continue; \
			NAME=$$(basename "$$blk"); \
			[ "$$NAME" = "library" ] && continue; \
			found=1; \
			echo "  - $$NAME (analog)"; \
			if [ -f "$$blk/build/config.mk" ]; then \
				DEPS=$$(grep "^DEPENDS" "$$blk/build/config.mk" | cut -d'=' -f2 | tr -s ' '); \
				[ -n "$$(echo $$DEPS)" ] && echo "    Depends on:$$DEPS"; \
			fi; \
			if ls "$$blk"va/*.va >/dev/null 2>&1; then \
				echo "    Verilog-A: $$(ls "$$blk"va/*.va | wc -l) model(s)"; \
			fi; \
		done; \
		if [ $$found -eq 0 ]; then \
			echo "  (none yet - make AddAnalogBlock BLOCK_NAME=name)"; \
		fi; \
	fi

_status_digital:
	@if [ "$(HAS_DIGITAL)" = "1" ]; then \
		echo "Digital Modules:"; \
		for proj in $(DIGITAL_DIR)/*/; do \
			if [ -d "$$proj" ]; then \
				PROJ_NAME=$$(basename "$$proj"); \
				echo "  - $$PROJ_NAME (digital)"; \
				if [ -f "$$proj/build/config.mk" ]; then \
					PARENT=$$(grep "^PARENT" "$$proj/build/config.mk" | cut -d'=' -f2 | tr -d ' '); \
					if [ "$$PARENT" != "" ]; then \
						echo "    Parent: $$PARENT"; \
					fi; \
				fi; \
			fi; \
		done; \
	fi

# One shell block, not three recipe lines: `exit 0` only ends the line it is in, so the
# old version printed "does not exist" and then "exists" on the very next line.
_status_caravel:
	@if [ "$(HAS_CARAVEL)" = "0" ]; then \
		echo "Caravel directory does not exist"; \
	else \
		echo "Caravel directory exists"; \
		$(MAKE) -s _check_caravel_$(PROJECT_STATE); \
	fi

_check_caravel_digital:
	@if [ -d "$(CARAVEL_DIR)/src" ] && [ -d "$(CARAVEL_DIR)/test" ]; then \
		echo "✓ Caravel correctly configured for digital project"; \
	else \
		echo "✗ Caravel not yet created for digital project"; \
	fi

_check_caravel_analog:
	@if [ -d "$(CARAVEL_DIR)/def" ] || [ -d "$(CARAVEL_DIR)/gds" ] || [ -d "$(CARAVEL_DIR)/lef" ]; then \
		echo "✓ Caravel correctly configured for analog project"; \
	else \
		echo "✗ Caravel not yet created for analog project"; \
	fi

_check_caravel_mixed:
	@DIGITAL_OK=false; ANALOG_OK=false; \
	if [ -d "$(CARAVEL_DIR)/src" ] && [ -d "$(CARAVEL_DIR)/test" ]; then \
		DIGITAL_OK=true; \
	fi; \
	if [ -d "$(CARAVEL_DIR)/def" ] || [ -d "$(CARAVEL_DIR)/gds" ] || [ -d "$(CARAVEL_DIR)/lef" ]; then \
		ANALOG_OK=true; \
	fi; \
	if [ "$$DIGITAL_OK" = "true" ] && [ "$$ANALOG_OK" = "true" ]; then \
		echo "✓ Caravel correctly configured for mixed project"; \
	else \
		echo "✗ Caravel not yet created for mixed project"; \
	fi

_check_caravel_caravel _check_caravel_unknown:
	@echo "⚠ Unknown caravel configuration"