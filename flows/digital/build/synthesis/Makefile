include ../config.mk

# Enforce Nix Shell
ifndef IN_NIX_SHELL
  $(error This Makefile must be run inside the nix-shell environment. Run ./env.sh first to enter the nix-shell)
endif

# OpenLane2 Config
OPENLANE2_ROOT ?= $(shell pwd)/openlane2
PDK ?= sky130A
PDK_ROOT ?= $(HOME)/.volare
XSCHEM_DIR := xschem

# CONFIG JSON VARIABLES
CLOCK_PERIOD ?= 10.0
CORE_UTIL ?= 40
# Options: tt_block_1x1_pg, tt_block_2x2_pg, tt_block_4x4_pg, or more. Check flows/def/digital/ for available templates.
TT_TEMPLATE_GDS ?= tt_block_1x1_pg.def

ANALOG_OUTPUT_DIR = ../../../../analog/$(DESIGN_TOP)/output

.PHONY: all synthesis harden clean create_config config.json xschem xschem-yosys xschem-verilator

all: synthesis

create_config: config.json

config.json:
	@printf "$(BLUE)[DIGITAL]$(NC) Creating OpenLane2 config with power grid optimizations...\n"
	@echo '{' > config.json
	@echo '    "PDK": "$(PDK)",' >> config.json
	@echo '    "PDK_ROOT": "$(PDK_ROOT)",' >> config.json
	@echo '    "DESIGN_NAME": "$(DESIGN_TOP)",' >> config.json
	@echo '    "VERILOG_FILES": [' >> config.json
	@all_files="$(RTL_FILES) $(RTL_FILES_H)"; \
	 if [ -n "$$all_files" ]; then \
	   first=true; \
	   for file in $$all_files; do \
		 if [ "$$first" = "true" ]; then \
		   printf '        "%s"' "$$file" >> config.json; \
		   first=false; \
		 else \
		   printf ',\n        "%s"' "$$file" >> config.json; \
		 fi; \
	   done; \
	   echo "" >> config.json; \
	 fi
	@echo '    ],' >> config.json
	@echo '    "CLOCK_PORT": "i_clk",' >> config.json
	@echo '    "CLOCK_PERIOD": $(CLOCK_PERIOD),' >> config.json
	@echo '    "CLOCK_NET": "i_clk",' >> config.json
	@echo '    "FP_SIZING": "relative",' >> config.json
	@echo '    "FP_CORE_UTIL": $(CORE_UTIL),' >> config.json
	@echo '    "FP_ASPECT_RATIO": 1,' >> config.json
	@echo '    "ERROR_ON_PDN_VIOLATIONS": true,' >> config.json
	@echo '    "FP_PDN_ENABLE_RAILS": true,' >> config.json
	@echo '    "MAX_FANOUT_CONSTRAINT": 16,' >> config.json
	@echo '    "MAX_TRANSITION_CONSTRAINT": 1.0,' >> config.json
	@echo '    "IO_DELAY_CONSTRAINT": 0.2,' >> config.json
	@echo '    "DRT_THREADS": 4,' >> config.json
	@echo '    "RT_MAX_LAYER": "met4",' >> config.json
	@echo '    "ERROR_ON_MAGIC_DRC": true,' >> config.json
	@echo '    "ERROR_ON_LVS_ERROR": true,' >> config.json
	@echo '    "ERROR_ON_PDN_VIOLATIONS": false,' >> config.json
	@echo '    "FP_DEF_TEMPLATE": "../../../../flows/def/digital/$(TT_TEMPLATE_DEF)",' >> config.json
	@echo '    "pdk::sky130A": {' >> config.json
	@echo '        "STD_CELL_LIBRARY": "sky130_fd_sc_hd",' >> config.json
	@echo '        "MAX_FANOUT_CONSTRAINT": 6,' >> config.json
	@echo '        "SYNTH_STRATEGY": "AREA 0",' >> config.json
	@echo '        "FP_CORE_UTIL": $(CORE_UTIL),' >> config.json
	@echo '        "VDD_NETS": "VDD",' >> config.json
	@echo '        "GND_NETS": "VSS"' >> config.json
	@echo '    }' >> config.json
	@echo '}' >> config.json

synthesis: create_config
	@printf "$(BLUE)[DIGITAL]$(NC) Starting synthesis for $(DESIGN_TOP) using OpenLane2...\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Using PDK: $(PDK), Core Util: $(CORE_UTIL)%%\n"
	openlane --pdk $(PDK) --pdk-root $(PDK_ROOT) --manual-pdk \
		--run-tag $(DESIGN_TOP)_synthesis \
		--to Yosys.Synthesis \
		config.json

harden: create_config
	@printf "$(BLUE)[DIGITAL]$(NC) Starting full hardening for $(DESIGN_TOP) using OpenLane2...\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Using PDK: $(PDK), Core Util: $(CORE_UTIL)%%\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Auto sizing: $(AUTO_SIZING)\n"
	openlane --pdk $(PDK) --pdk-root $(PDK_ROOT) --manual-pdk \
		--run-tag $(DESIGN_TOP)_full \
		config.json

# Generic verilator generation function
# Usage: $(call verilator_generate,TOP_MODULE,FILES,OUTPUT_NAME)
define verilator_generate
	@printf "$(BLUE)[VERILATOR]$(NC) Generating shared library for $(1)...\n"
	@if [ -z "$(2)" ]; then \
		printf "$(RED)[ERROR]$(NC) No files specified for compilation.\n"; \
		exit 1; \
	fi; \
	printf "$(BLUE)[VERILATOR]$(NC) Using files: $(2)\n"; \
	verilator --cc --build \
		--prefix "V$(1)" \
		-CFLAGS "-fPIC" \
		--top-module $(1) \
		$(2); \
	if [ $$? -ne 0 ]; then \
		printf "$(RED)[ERROR]$(NC) Verilator generation failed.\n"; \
		exit 1; \
	fi; \
	cd obj_dir && \
	g++ -shared -fPIC \
		V$(1)__ALL.a \
		-o $(3).so; \
	if [ $$? -ne 0 ]; then \
		printf "$(RED)[ERROR]$(NC) Shared library compilation failed.\n"; \
		exit 1; \
	fi; \
	cd ..; \
	mkdir -p $(XSCHEM_DIR)/verilator; \
	mv obj_dir/$(3).so $(XSCHEM_DIR)/verilator/; \
	printf "$(GREEN)[SUCCESS]$(NC) Generated $(3).so in $(XSCHEM_DIR)/verilator/\n"
endef

# Verilator generation for main design
verilator_generate:
	$(call verilator_generate,$(DESIGN_TOP),$(RTL_FILES),$(DESIGN_TOP))

# Verilator generation for testbench
verilator_generate_tb:
	$(call verilator_generate,$(TB_TOP_MODULE),$(TB_TOP) $(RTL_FILES),$(TB_TOP_MODULE))

# Xschem generation from OpenLane outputs
xschem-yosys: harden
	@printf "$(BLUE)[XSCHEM]$(NC) Generating xschem symbol from OpenLane synthesis...\n"
	@mkdir -p $(XSCHEM_DIR)
	@SYNTH_NETLIST=$$(find runs/$(DESIGN_TOP)_full/final/nl -name "$(DESIGN_TOP).nl.v" 2>/dev/null | head -1); \
	if [ -z "$$SYNTH_NETLIST" ]; then \
		SYNTH_NETLIST=$$(find runs/$(DESIGN_TOP)_synthesis -name "$(DESIGN_TOP).nl.v" 2>/dev/null | head -1); \
	fi; \
	if [ -z "$$SYNTH_NETLIST" ]; then \
		printf "$(RED)[ERROR]$(NC) Netlist not found. Run 'make harden' or 'make synthesis' first.\n"; \
		exit 1; \
	fi; \
	cp ../../../../tools/verilog_to_xschem.py ./; \
	printf "$(BLUE)[XSCHEM]$(NC) Using netlist: $$SYNTH_NETLIST\n"; \
	python3 verilog_to_xschem.py \
		--netlist $$SYNTH_NETLIST \
		--output $(XSCHEM_DIR) \
		--pdk-root $(PDK_ROOT) \
		--pdk $(PDK) \
		--method yosys \
		--project-name $(DESIGN_TOP); \
	rm -f verilog_to_xschem.py
	@printf "$(GREEN)[SUCCESS]$(NC) Xschem files generated in $(XSCHEM_DIR)/\n"

# Xschem generation using Verilator for behavioral simulation
xschem-verilator: verilator_generate
	@printf "$(BLUE)[XSCHEM]$(NC) Generating xschem symbol with Verilator...\n"
	@mkdir -p $(XSCHEM_DIR)
	@if [ -z "$(RTL_FILES)" ]; then \
		printf "$(RED)[ERROR]$(NC) No RTL files specified in RTL_FILES variable.\n"; \
		exit 1; \
	fi; \
	MAIN_RTL=$$(echo $(RTL_FILES) | awk '{print $$1}'); \
	cp ../../../../tools/verilog_to_xschem.py ./; \
	printf "$(BLUE)[XSCHEM]$(NC) Using RTL: $$MAIN_RTL\n"; \
	python3 verilog_to_xschem.py \
		--rtl $$MAIN_RTL \
		--output $(XSCHEM_DIR) \
		--method verilator \
		--project-name $(DESIGN_TOP); \
	rm -f verilog_to_xschem.py
	@printf "$(GREEN)[SUCCESS]$(NC) Xschem files generated in $(XSCHEM_DIR)/\n"

# Takes the TB_TOP_FILE defined in the config.mk and turns it to the xschem equivalent
xschem-verilator-tb: verilator_generate_tb
	@printf "$(BLUE)[XSCHEM]$(NC) Generating xschem symbol with Verilator for testbench...\n"
	@mkdir -p $(XSCHEM_DIR)
	@if [ -z "$(TB_TOP)" ]; then \
		printf "$(RED)[ERROR]$(NC) No testbench files found in TB_TOP variable.\n"; \
		exit 1; \
	fi; \
	cp ../../../../tools/verilog_to_xschem.py ./; \
	printf "$(BLUE)[XSCHEM]$(NC) Using Testbench: $(TB_TOP)\n"; \
	python3 verilog_to_xschem.py \
		--rtl $(TB_TOP) \
		--output $(XSCHEM_DIR) \
		--method verilator \
		--project-name $(TB_TOP_MODULE); \
	rm -f verilog_to_xschem.py
	@printf "$(GREEN)[SUCCESS]$(NC) Xschem testbench files generated in $(XSCHEM_DIR)/\n"


clean:
	@printf "$(BLUE)[DIGITAL]$(NC) Cleaning synthesis files...\n"
	@rm -rf config.json runs $(XSCHEM_DIR) *.log obj_dir
	@printf "$(GREEN)[SUCCESS]$(NC) Clean completed\n"
