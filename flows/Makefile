ANALOG_LIB_REPO := https://github.com/UW-ASIC/AnalogLibrary.git
ANALOG_DIR := ../analog
DIGITAL_DIR := ../digital
CARAVEL_DIR := ../caravel

PROJECT_STATE := $(shell \
	if [ ! -d "$(ANALOG_DIR)" ] && [ ! -d "$(DIGITAL_DIR)" ] && [ ! -d "$(CARAVEL_DIR)" ]; then \
		echo "none"; \
	elif [ -d "$(ANALOG_DIR)" ] && [ -d "$(DIGITAL_DIR)" ]; then \
		echo "mixed"; \
	elif [ -d "$(DIGITAL_DIR)" ] && [ -d "$(CARAVEL_DIR)" ] && [ ! -d "$(ANALOG_DIR)" ]; then \
		echo "digital"; \
	elif [ -d "$(ANALOG_DIR)" ] && [ ! -d "$(DIGITAL_DIR)" ]; then \
		echo "analog"; \
	else \
		echo "unknown"; \
	fi)

.PHONY: CreateProject AddDigitalModule CreateCaravel DeleteAll status help _create_analog_structure _create_digital_structure

help:
	@echo "Project Management Makefile"
	@echo "=========================="
	@echo "Current state: $(PROJECT_STATE)"
	@echo ""
	@echo "Project Creation:"
	@echo "  CreateProject PROJECT_NAME=name PROJECT_TYPE=<analog,digital,mixed>"
	@echo ""
	@echo "Module Addition:"
	@echo "  AddDigitalModule MODULE_NAME=name"
	@echo ""
	@echo "TinyTapeout Caravel Integration:"
	@echo "  CreateCaravel PROJECT_NAME=name"
	@echo ""
	@echo "Utilities:"
	@echo "  DeleteAll - Remove all projects"
	@echo "  status - Show current project state"
	@echo "  help - Show this message"

# Internal target to create analog structure
_create_analog_structure:
	@mkdir -p $(ANALOG_DIR) $(CARAVEL_DIR)
	@cd $(ANALOG_DIR) && if [ ! -d "library" ]; then \
		mkdir -p library output && \
		git clone $(ANALOG_LIB_REPO) library/; \
	fi
	@cd $(ANALOG_DIR) && mkdir -p {build,layout,schematics}
	@cd $(ANALOG_DIR)/build && \
		echo "# Analog Project Configuration" > config.mk && \
		echo "PROJECT = $(PROJECT_NAME)" >> config.mk && \
		echo "TOP_SCHEMATIC = $(PROJECT_NAME)" >> config.mk && \
		echo "TOP_LAYOUT = $(PROJECT_NAME)" >> config.mk
	@cd $(ANALOG_DIR)/build && \
		mkdir -p {layout,schematic,validation} && \
		cp -r ../../flows/analog/build/layout/* ./layout/ 2>/dev/null || true && \
		cp -r ../../flows/analog/build/schematic/* ./schematic/ 2>/dev/null || true && \
		cp -r ../../flows/analog/build/validation/* ./validation/ 2>/dev/null || true

# Internal target to create digital structure
_create_digital_structure:
	@mkdir -p $(DIGITAL_DIR) $(CARAVEL_DIR)
	@cd $(DIGITAL_DIR) && mkdir -p $(MODULE_NAME)/{build,src,test}
	@cd $(DIGITAL_DIR)/$(MODULE_NAME)/build && \
		echo "# Digital Project Configuration" > config.mk && \
		echo "PROJECT = $(MODULE_NAME)" >> config.mk && \
		echo "DESIGN_TOP := $(MODULE_NAME)" >> config.mk && \
		echo 'RTL_FILES := $$(shell find ../../../ -name "*.v" -o -name "*.sv")' >> config.mk && \
		echo 'RTL_FILES_H := $$(shell find ../../ -name "*.vh" -o -name "*.svh")' >> config.mk && \
		echo 'TB_FILES := $$(shell find ../../test -name "*_tb.v" -o -name "tb_*.v")' >> config.mk && \
		echo 'COCOTB_TEST_FILES := $$(shell find ../../test -name "test_*.py")' >> config.mk && \
		echo "TOPLEVEL_TB_MODULES := tb_$(MODULE_NAME)" >> config.mk && \
		echo "MODULE_TESTS := test_$(MODULE_NAME)" >> config.mk && \
		echo "PROJECT_TYPE = digital" >> config.mk
	@cd $(DIGITAL_DIR)/$(MODULE_NAME)/build && \
		mkdir -p {des_tb,lint,synthesis,verification} && \
		cp -r ../../../flows/digital/build/des_tb/* ./des_tb/ 2>/dev/null || true && \
		cp -r ../../../flows/digital/build/lint/* ./lint/ 2>/dev/null || true && \
		cp -r ../../../flows/digital/build/synthesis/* ./synthesis/ 2>/dev/null || true && \
		cp -r ../../../flows/digital/build/verification/* ./verification/ 2>/dev/null || true
	@cd $(DIGITAL_DIR)/$(MODULE_NAME)/src && touch $(MODULE_NAME).v
	@cd $(DIGITAL_DIR)/$(MODULE_NAME)/test && touch test_$(MODULE_NAME).py && touch tb_$(MODULE_NAME).v

CreateProject:
	@echo "Creating Project: $(PROJECT_NAME)"
	@if [ "$(PROJECT_NAME)" = "" ]; then \
		echo "Error: PROJECT_NAME parameter is required"; \
		echo "Usage: make CreateProject PROJECT_NAME=myproject PROJECT_TYPE=<analog,digital,mixed>"; \
		exit 1; \
	fi
	@if [ "$(PROJECT_TYPE)" = "" ]; then \
		echo "Error: PROJECT_TYPE parameter is required"; \
		echo "Usage: make CreateProject PROJECT_NAME=myproject PROJECT_TYPE=<analog,digital,mixed>"; \
		exit 1; \
	fi
	@if [ "$(PROJECT_STATE)" != "none" ]; then \
		echo "Error: Project already exists as $(PROJECT_STATE) project"; \
		echo "Can only AddModule, or if you want to restart DeleteAll after backing up"; \
		exit 1; \
	fi
	@if [ "$(PROJECT_TYPE)" != "analog" ] && [ "$(PROJECT_TYPE)" != "digital" ] && [ "$(PROJECT_TYPE)" != "mixed" ]; then \
		echo "Error: PROJECT_TYPE must be analog, digital, or mixed"; \
		exit 1; \
	fi
	@if [ "$(PROJECT_TYPE)" = "analog" ] || [ "$(PROJECT_TYPE)" = "mixed" ]; then \
		$(MAKE) _create_analog_structure; \
	fi
	@if [ "$(PROJECT_TYPE)" = "digital" ] || [ "$(PROJECT_TYPE)" = "mixed" ]; then \
		$(MAKE) _create_digital_structure MODULE_NAME=$(PROJECT_NAME) PARENT=; \
	fi
	@echo "Project $(PROJECT_NAME) created successfully!"

AddDigitalModule:
	@echo "Adding Digital Module: $(MODULE_NAME)"
	@if [ "$(MODULE_NAME)" = "" ]; then \
		echo "Error: MODULE_NAME parameter is required"; \
		echo "Usage: make AddModule MODULE_NAME=name MODULE_TYPE=digital [PARENT=parent]"; \
		exit 1; \
	fi
	@if [ "$(PROJECT_STATE)" = "none" ]; then \
		echo "Error: Project hasn't been created yet, call CreateProject"; \
		exit 1; \
	fi
	@if [ "$(PROJECT_STATE)" = "analog" ]; then \
		echo "Error: Cannot add digital modules to analog project"; \
		exit 1; \
	fi
	@if [ "$(PARENT)" != "" ]; then \
		PARENT_FOUND=false; \
		if [ -d "$(DIGITAL_DIR)/$(PARENT)" ]; then \
			PARENT_FOUND=true; \
		fi; \
		if [ "$$PARENT_FOUND" = "false" ]; then \
			echo "Error: Parent module $(PARENT) not found"; \
			exit 1; \
		fi; \
	fi
	@$(MAKE) _create_digital_structure MODULE_NAME=$(MODULE_NAME)
	@echo "Module $(MODULE_NAME) added successfully!"

CreateCaravel:
	@echo "Creating TinyTapeout Caravel Project"
	@if [ "$(PROJECT_NAME)" = "" ]; then \
		echo "Error: PROJECT_NAME parameter is required"; \
		echo "Usage: make CreateCaravel PROJECT_NAME=myproject"; \
		exit 1; \
	fi
	@if [ "$(PROJECT_STATE)" = "none" ]; then \
		echo "Error: No project exists. Create a project first."; \
		exit 1; \
	fi
	@mkdir -p $(CARAVEL_DIR)
	@cp -r flows/caravel/* $(CARAVEL_DIR)/ 2>/dev/null || true
	@if [ "$(PROJECT_STATE)" = "digital" ]; then \
		rm -rf $(CARAVEL_DIR)/{def,gds,lef}; \
	fi
	@if [ "$(PROJECT_STATE)" = "mixed" ] || [ "$(PROJECT_STATE)" = "digital" ]; then \
		mkdir -p $(CARAVEL_DIR)/{src,test}; \
		for srcdir in $(DIGITAL_DIR)/*/src; do \
			if [ -d "$$srcdir" ]; then \
				cp -r "$$srcdir"/* $(CARAVEL_DIR)/src/ 2>/dev/null || true; \
			fi; \
		done; \
		for testdir in $(DIGITAL_DIR)/*/test; do \
			if [ -d "$$testdir" ]; then \
				cp -r "$$testdir"/* $(CARAVEL_DIR)/test/ 2>/dev/null || true; \
			fi; \
		done; \
	fi
	@if [ "$(PROJECT_STATE)" = "analog" ]; then \
		if [ -d "$(ANALOG_DIR)/output" ]; then \
			cp -r $(ANALOG_DIR)/output/{def,gds,lef} $(CARAVEL_DIR)/ 2>/dev/null || true; \
		fi; \
	fi
	@echo "Caravel project created successfully!"

DeleteAll:
	@echo "Deleting all project files..."
	@rm -rf $(ANALOG_DIR) $(DIGITAL_DIR) $(CARAVEL_DIR)
	@echo "All project files deleted successfully!"

status:
	@echo "Project Status: $(PROJECT_STATE)"
	@echo ""
	@if [ "$(PROJECT_STATE)" != "none" ]; then \
		echo "Modules:"; \
		echo "=================="; \
		if [ -d "$(ANALOG_DIR)" ]; then \
			echo "Analog Project:"; \
			if [ -f "$(ANALOG_DIR)/build/config.mk" ]; then \
				PROJ_NAME=$$(grep "^PROJECT" "$(ANALOG_DIR)/build/config.mk" | cut -d'=' -f2 | tr -d ' '); \
				echo "  - $$PROJ_NAME (analog)"; \
			else \
				echo "  - analog project (no config found)"; \
			fi; \
		fi; \
		if [ -d "$(DIGITAL_DIR)" ]; then \
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
		fi; \
		echo ""; \
		echo "Caravel Status:"; \
		echo "=============="; \
		if [ -d "$(CARAVEL_DIR)" ]; then \
			echo "Caravel directory exists"; \
			if [ "$(PROJECT_STATE)" = "digital" ]; then \
				if [ -d "$(CARAVEL_DIR)/src" ] && [ -d "$(CARAVEL_DIR)/test" ]; then \
					echo "✓ Caravel correctly configured for digital project"; \
				else \
					echo "✗ Caravel not yet created for digital project"; \
				fi; \
			elif [ "$(PROJECT_STATE)" = "analog" ]; then \
				if [ -d "$(CARAVEL_DIR)/def" ] || [ -d "$(CARAVEL_DIR)/gds" ] || [ -d "$(CARAVEL_DIR)/lef" ]; then \
					echo "✓ Caravel correctly configured for analog project"; \
				else \
					echo "✗ Caravel not yet created for analog project"; \
				fi; \
			elif [ "$(PROJECT_STATE)" = "mixed" ]; then \
				DIGITAL_OK=false; \
				ANALOG_OK=false; \
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
				fi; \
			fi; \
		else \
			echo "Caravel directory does not exist"; \
		fi; \
	else \
		echo "No projects found."; \
	fi
