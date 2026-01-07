# Status reporting functions
_status_analog:
	@if [ "$(HAS_ANALOG)" = "1" ]; then \
		echo "Analog Project:"; \
		if [ -f "$(ANALOG_DIR)/build/config.mk" ]; then \
			PROJ_NAME=$$(grep "^PROJECT" "$(ANALOG_DIR)/build/config.mk" | cut -d'=' -f2 | tr -d ' '); \
			echo "  - $$PROJ_NAME (analog)"; \
		else \
			echo "  - analog project (no config found)"; \
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

_status_caravel:
	@if [ "$(HAS_CARAVEL)" = "0" ]; then \
		echo "Caravel directory does not exist"; \
		exit 0; \
	fi
	@echo "Caravel directory exists"
	@$(MAKE) -s _check_caravel_$(PROJECT_STATE)

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