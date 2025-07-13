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

.PHONY: CreateProject AddModule CreateCaravel DeleteAll status help

help:
	@echo "Project Management Makefile"
	@echo "=========================="
	@echo "Current state: $(PROJECT_STATE)"
	@echo ""
	@echo "Project Creation:"
	@echo "  CreateProject PROJECT_NAME=name PROJECT_TYPE=<analog,digital,mixed>"
	@echo ""
	@echo "Module Addition:"
	@echo "  AddModule MODULE_NAME=name MODULE_TYPE=<analog,digital> PARENT=<parent_module_name>"
	@echo ""
	@echo "TinyTapeout Caravel Integration:"
	@echo "  CreateCaravel PROJECT_NAME=name"
	@echo ""
	@echo "Utilities:"
	@echo "  DeleteAll - Remove all projects"
	@echo "  status - Show current project state"
	@echo "  help - Show this message"

# Validation function
define validate_project_params
	@if [ "$(PROJECT_NAME)" = "" ]; then \
		echo "Error: PROJECT_NAME parameter is required"; \
		echo "Usage: make $(1) PROJECT_NAME=myproject$(2)"; \
		exit 1; \
	fi
endef

# Project creation function
define create_analog_structure
	@mkdir -p $(ANALOG_DIR) $(CARAVEL_DIR)
	@cd $(ANALOG_DIR) && \
	if [ ! -d "library" ]; then \
		mkdir -p library; \
		git clone $(ANALOG_LIB_REPO) library/; \
	fi && \
	mkdir -p $(1)/{build,layout,schematics,symbols} && \
	cd $(1)/build && \
	echo "# Analog Project Configuration" > config.mk && \
	echo "PROJECT = $(1)" >> config.mk && \
	echo "TOP_SCHEMATIC = $(1)" >> config.mk && \
	echo "TOP_LAYOUT = $(1)" >> config.mk && \
	echo "PROJECT_TYPE = analog" >> config.mk && \
	if [ "$(2)" != "" ]; then \
		echo "PARENT = $(2)" >> config.mk; \
	fi && \
	mkdir -p {layout,schematic,validation} && \
	cp -r ../../../flows/analog/build/layout/* ./layout/ 2>/dev/null || true && \
	cp -r ../../../flows/analog/build/schematic/* ./schematic/ 2>/dev/null || true && \
	cp -r ../../../flows/analog/build/validation/* ./validation/ 2>/dev/null || true
	@cd $(ANALOG_DIR)/$(1)/schematics && touch $(1).sch
endef

define create_digital_structure
	@mkdir -p $(DIGITAL_DIR) $(CARAVEL_DIR)
	@cd $(DIGITAL_DIR) && \
	mkdir -p $(1)/{build,src,test} && \
	cd $(1)/build && \
	echo "# Digital Project Configuration" > config.mk && \
	echo "PROJECT = $(1)" >> config.mk && \
	echo "DESIGN_TOP := $(1)" >> config.mk && \
	echo "RTL_FILES := \$\$(shell find ../../src -name \"*.v\" -o -name \"*.sv\")" >> config.mk && \
	echo "RTL_FILES_H := \$\$(shell find ../../src -name \"*.vh\" -o -name \"*.svh\")" >> config.mk && \
	echo "TB_FILES := \$\$(shell find ../../test -name \"*_tb.v\" -o -name \"tb_*.v\")" >> config.mk && \
	echo "COCOTB_TEST_FILES := \$\$(shell find ../../test -name \"test_*.py\")" >> config.mk && \
	echo "TOPLEVEL_TB_MODULES := tb_$(1)" >> config.mk && \
	echo "MODULE_TESTS := test_$(1)" >> config.mk && \
	echo "PROJECT_TYPE = digital" >> config.mk && \
	if [ "$(2)" != "" ]; then \
		echo "PARENT = $(2)" >> config.mk; \
	fi && \
	mkdir -p {des_tb,lint,synthesis,verification} && \
	cp -r ../../../flows/digital/build/des_tb/* ./des_tb/ 2>/dev/null || true && \
	cp -r ../../../flows/digital/build/lint/* ./lint/ 2>/dev/null || true && \
	cp -r ../../../flows/digital/build/synthesis/* ./synthesis/ 2>/dev/null || true && \
	cp -r ../../../flows/digital/build/verification/* ./verification/ 2>/dev/null || true
	@cd $(DIGITAL_DIR)/$(1)/src && touch $(1).v
	@cd $(DIGITAL_DIR)/$(1)/test && touch test_$(1).py && touch tb_$(1).v
endef

# Function to validate parent module exists
define validate_parent_module
	@if [ "$(PARENT)" != "" ]; then \
		PARENT_FOUND=false; \
		if [ -d "$(ANALOG_DIR)/$(PARENT)" ]; then \
			PARENT_FOUND=true; \
		fi; \
		if [ -d "$(DIGITAL_DIR)/$(PARENT)" ]; then \
			PARENT_FOUND=true; \
		fi; \
		if [ "$$PARENT_FOUND" = "false" ]; then \
			echo "Error: Parent module $(PARENT) not found"; \
			exit 1; \
		fi; \
	fi
endef

CreateProject:
	@echo "Creating Project: $(PROJECT_NAME)"
	$(call validate_project_params,CreateProject)
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
		$(call create_analog_structure,$(PROJECT_NAME)); \
	fi
	@if [ "$(PROJECT_TYPE)" = "digital" ] || [ "$(PROJECT_TYPE)" = "mixed" ]; then \
		$(call create_digital_structure,$(PROJECT_NAME)); \
	fi

	@echo "Project $(PROJECT_NAME) created successfully!"

AddModule:
	@echo "Adding $(MODULE_TYPE) Module: $(MODULE_NAME)"
	$(call validate_project_params,AddModule, MODULE_NAME=name MODULE_TYPE=<analog,digital> PARENT=<parent>)
	@if [ "$(MODULE_NAME)" = "" ]; then \
		echo "Error: MODULE_NAME parameter is required"; \
		exit 1; \
	fi
	@if [ "$(MODULE_TYPE)" = "" ]; then \
		echo "Error: MODULE_TYPE parameter is required"; \
		exit 1; \
	fi
	@if [ "$(MODULE_TYPE)" != "analog" ] && [ "$(MODULE_TYPE)" != "digital" ]; then \
		echo "Error: MODULE_TYPE must be analog or digital"; \
		exit 1; \
	fi
	@if [ "$(PROJECT_STATE)" = "none" ]; then \
		echo "Error: Project hasn't been created yet, call CreateProject"; \
		exit 1; \
	fi
	@if [ "$(PROJECT_STATE)" = "digital" ] && [ "$(MODULE_TYPE)" = "analog" ]; then \
		echo "Error: Cannot add analog modules to digital project"; \
		exit 1; \
	fi
	$(call validate_parent_module)

	@if [ "$(MODULE_TYPE)" = "analog" ]; then \
		$(call create_analog_structure,$(MODULE_NAME),$(PARENT)); \
	fi
	@if [ "$(MODULE_TYPE)" = "digital" ]; then \
		$(call create_digital_structure,$(MODULE_NAME),$(PARENT)); \
	fi

	@echo "Module $(MODULE_NAME) added successfully!"

CreateCaravel:
	@echo "Creating TinyTapeout Caravel Project"
	$(call validate_project_params,CreateCaravel)
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
		find $(DIGITAL_DIR) -name "src" -type d -exec cp -r {}/* $(CARAVEL_DIR)/src/ \; 2>/dev/null || true; \
		find $(DIGITAL_DIR) -name "test" -type d -exec cp -r {}/* $(CARAVEL_DIR)/test/ \; 2>/dev/null || true; \
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
		echo "Projects and Modules:"; \
		echo "=================="; \
		if [ -d "$(ANALOG_DIR)" ]; then \
			echo "Analog Projects:"; \
			for proj in $(ANALOG_DIR)/*/; do \
				if [ -d "$$proj" ]; then \
					PROJ_NAME=$$(basename "$$proj"); \
					echo "  - $$PROJ_NAME (analog)"; \
					if [ -f "$$proj/build/config.mk" ]; then \
						PARENT=$$(grep "^PARENT" "$$proj/build/config.mk" | cut -d'=' -f2 | tr -d ' '); \
						if [ "$$PARENT" != "" ]; then \
							echo "    Parent: $$PARENT"; \
						fi; \
					fi; \
				fi; \
			done; \
		fi; \
		if [ -d "$(DIGITAL_DIR)" ]; then \
			echo "Digital Projects:"; \
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
					echo "✗ Caravel not properly configured for digital project"; \
				fi; \
			elif [ "$(PROJECT_STATE)" = "analog" ]; then \
				if [ -d "$(CARAVEL_DIR)/def" ] || [ -d "$(CARAVEL_DIR)/gds" ] || [ -d "$(CARAVEL_DIR)/lef" ]; then \
					echo "✓ Caravel correctly configured for analog project"; \
				else \
					echo "✗ Caravel not properly configured for analog project"; \
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
					echo "✗ Caravel not properly configured for mixed project"; \
				fi; \
			fi; \
		else \
			echo "Caravel directory does not exist"; \
		fi; \
	else \
		echo "No projects found."; \
	fi
