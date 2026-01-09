ANALOG_LIB_REPO := https://github.com/UW-ASIC/AnalogLibrary.git
ANALOG_DIR := ../analog
DIGITAL_DIR := ../digital
CARAVEL_DIR := ../caravel

HAS_ANALOG := $(shell [ -d "$(ANALOG_DIR)" ] && echo "1" || echo "0")
HAS_DIGITAL := $(shell [ -d "$(DIGITAL_DIR)" ] && echo "1" || echo "0")
HAS_CARAVEL := $(shell [ -d "$(CARAVEL_DIR)" ] && echo "1" || echo "0")
STATE_KEY := $(HAS_ANALOG)$(HAS_DIGITAL)$(HAS_CARAVEL)
PROJECT_STATE := $(strip \
	$(if $(filter 000,$(STATE_KEY)),none, \
	$(if $(filter 111,$(STATE_KEY)),mixed, \
	$(if $(filter 010,$(STATE_KEY)),digital, \
	$(if $(filter 100,$(STATE_KEY)),analog, \
	$(if $(filter 101,$(STATE_KEY)),caravel, \
	unknown))))))

include utility.mk

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
	@echo "  status - Show current project state"
	@echo "  help - Show this message"

# Validation functions using Make's $(error) and $(if)
check-param = $(if $(value $(1)),,$(error $(1) is required. Usage: $(2)))
check-state = $(if $(filter $(PROJECT_STATE),$(1)),,$(error Invalid state '$(PROJECT_STATE)'. Expected: $(1)))
check-type = $(if $(filter $(PROJECT_TYPE),analog digital mixed),,$(error PROJECT_TYPE must be analog, digital, or mixed))
COMMA := ,

CreateProject:
	@echo "Creating Project: $(PROJECT_NAME)"
	$(call check-param,PROJECT_NAME,make CreateProject PROJECT_NAME=myproject PROJECT_TYPE=<analog|digital|mixed>)
	$(call check-param,PROJECT_TYPE,make CreateProject PROJECT_NAME=myproject PROJECT_TYPE=<analog|digital|mixed>)
	$(call check-state,none)
	$(call check-type)
	$(if $(filter analog mixed,$(PROJECT_TYPE)),$(MAKE) _create_analog_structure;)
	$(if $(filter digital mixed,$(PROJECT_TYPE)),$(MAKE) _create_digital_structure MODULE_NAME=$(PROJECT_NAME);)
	@echo "Project $(PROJECT_NAME) created successfully!"

AddDigitalModule:
	@echo "Adding Digital Module: $(MODULE_NAME)"
	$(call check-param,MODULE_NAME,make AddDigitalModule MODULE_NAME=name)
	$(if $(filter none,$(PROJECT_STATE)),$(error No project exists. Run CreateProject first))
	$(if $(filter analog,$(PROJECT_STATE)),$(error Cannot add digital modules to analog-only project))
	$(if $(PARENT),$(if $(wildcard $(DIGITAL_DIR)/$(PARENT)),,$(error Parent module $(PARENT) not found)))
	@$(MAKE) _create_digital_structure MODULE_NAME=$(MODULE_NAME)
	@echo "Module $(MODULE_NAME) added successfully!"

CreateCaravel:
	@echo "Creating TinyTapeout Caravel Project"
	$(call check-param,PROJECT_NAME,make CreateCaravel PROJECT_NAME=myproject)
	$(if $(filter none,$(PROJECT_STATE)),$(error No project exists. Create a project first))
	@mkdir -p $(CARAVEL_DIR)
	@cp -r caravel/* $(CARAVEL_DIR)/ 2>/dev/null || true
	$(if $(filter digital,$(PROJECT_STATE)),@rm -rf $(CARAVEL_DIR)/{def$(COMMA)gds$(COMMA)lef};)
	$(if $(filter mixed digital,$(PROJECT_STATE)),\
		@mkdir -p $(CARAVEL_DIR)/{src,test}; \
		for srcdir in $(DIGITAL_DIR)/*/src; do \
			[ -d "$$srcdir" ] && cp -r "$$srcdir"/* $(CARAVEL_DIR)/src/ 2>/dev/null || true; \
		done; \
		for testdir in $(DIGITAL_DIR)/*/test; do \
			[ -d "$$testdir" ] && cp -r "$$testdir"/* $(CARAVEL_DIR)/test/ 2>/dev/null || true; \
		done;)
	$(if $(filter analog,$(PROJECT_STATE)),\
		@[ -d "$(ANALOG_DIR)/output" ] && cp -r $(ANALOG_DIR)/output/{def,gds,lef} $(CARAVEL_DIR)/ 2>/dev/null || true;)
	@echo "Caravel project created successfully!"

DeleteAll:
	@echo "Deleting all project files..."
	@rm -rf $(ANALOG_DIR) $(DIGITAL_DIR) $(CARAVEL_DIR)
	@echo "All project files deleted successfully!"

status:
	@echo "Project Status: $(PROJECT_STATE)"
	@echo ""
	@if [ "$(PROJECT_STATE)" = "none" ]; then \
		echo "No projects found."; \
		exit 0; \
	fi
	@echo "Modules:"
	@echo "=================="
	@$(MAKE) -s _status_analog
	@$(MAKE) -s _status_digital
	@echo ""
	@echo "Caravel Status:"
	@echo "=============="
	@$(MAKE) -s _status_caravel

# =======================================================================
# Helper Functions
# =======================================================================

# Internal target to create analog structure
_create_analog_structure:
	@mkdir -p $(ANALOG_DIR)/{build,layout,schematics,symbols}
	@if [ ! -d "$(ANALOG_DIR)/library" ]; then \
		mkdir -p $(ANALOG_DIR)/library && \
		git clone $(ANALOG_LIB_REPO) $(ANALOG_DIR)/library/; \
	fi
	@sed 's/@PROJECT_NAME@/$(PROJECT_NAME)/g' analog/build/config.mk.template > $(ANALOG_DIR)/build/config.mk
	@cd $(ANALOG_DIR)/build && \
		mkdir -p {layout,schematic,validation} && \
		cp -r ../../flows/analog/build/layout/* ./layout/ 2>/dev/null || true && \
		cp -r ../../flows/analog/build/schematic/* ./schematic/ 2>/dev/null || true && \
		cp -r ../../flows/analog/build/validation/* ./validation/ 2>/dev/null || true

# Internal target to create digital structure
_create_digital_structure:
	@mkdir -p $(DIGITAL_DIR)/$(MODULE_NAME)/{build,src,test}
	@sed 's/@MODULE_NAME@/$(MODULE_NAME)/g' digital/build/config.mk.template > $(DIGITAL_DIR)/$(MODULE_NAME)/build/config.mk
	@cd $(DIGITAL_DIR)/$(MODULE_NAME)/build && \
		mkdir -p {des_tb,lint,synthesis,verification} && \
		cp -r ../../../flows/digital/build/des_tb/* ./des_tb/ 2>/dev/null || true && \
		cp -r ../../../flows/digital/build/lint/* ./lint/ 2>/dev/null || true && \
		cp -r ../../../flows/digital/build/synthesis/* ./synthesis/ 2>/dev/null || true && \
		cp -r ../../../flows/digital/build/verification/* ./verification/ 2>/dev/null || true
	@printf '%s\n' \
		'`default_nettype none' \
		'module $(MODULE_NAME)(' \
		'	input  wire [7:0] ui_in,    // Dedicated inputs' \
		'	output wire [7:0] uo_out,   // Dedicated outputs' \
		'	input  wire [7:0] uio_in,   // IOs: Input path' \
		'	output wire [7:0] uio_out,  // IOs: Output path' \
		'	output wire [7:0] uio_oe,   // IOs: Enable path (active high: 0=input, 1=output)' \
		'	input  wire       ena,      // always 1 when the design is powered, so you can ignore it' \
		'	input  wire       clk,      // clock' \
		'	input  wire       rst_n     // reset_n - low to reset' \
		');' \
		'	assign uo_out  = ui_in + uio_in;' \
		'	assign uio_out = 0;' \
		'	assign uio_oe  = 0;' \
		'	// List all unused inputs to prevent warnings' \
		'	wire _unused = &{ena, clk, rst_n, 1'\''b0};' \
		'endmodule' \
		> $(DIGITAL_DIR)/$(MODULE_NAME)/src/$(MODULE_NAME).v
	@touch $(DIGITAL_DIR)/$(MODULE_NAME)/test/{test_$(MODULE_NAME).py,tb_$(MODULE_NAME).v,requirements.txt}
	@printf 'pytest==8.3.4\ncocotb==1.9.2\n' > $(DIGITAL_DIR)/$(MODULE_NAME)/test/requirements.txt
