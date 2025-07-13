include ../config.mk

# OpenLane2 Config
OPENLANE2_ROOT ?= $(shell pwd)/openlane2
PDK ?= sky130A
PDK_ROOT ?= $(HOME)/.volare
NETLIST_DIR := netlist

# Power grid configuration
CLOCK_PERIOD ?= 10.0
CORE_UTIL ?= 40

ANALOG_OUTPUT_DIR = ../../../../analog/$(DESIGN_TOP)/output

.PHONY: all synthesis harden clean create_config config.json

all: synthesis

create_config: config.json

config.json:
	@printf "$(BLUE)[DIGITAL]$(NC) Creating OpenLane2 config with power grid optimizations...\n"
	@echo '{' > config.json
	@echo '    "PDK": "$(PDK)",' >> config.json
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
	@echo '    "CLOCK_PORT": "clk",' >> config.json
	@echo '    "CLOCK_PERIOD": $(CLOCK_PERIOD),' >> config.json
	@echo '    "CLOCK_NET": "clk",' >> config.json
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
	@printf "$(BLUE)[DIGITAL]$(NC) Output directory: $(NETLIST_DIR)\n"
	@mkdir -p $(NETLIST_DIR)
	openlane --pdk $(PDK) --pdk-root $(PDK_ROOT) \
		--run-tag $(DESIGN_TOP)_synthesis \
		--to Yosys.Synthesis \
		config.json

harden: create_config
	@printf "$(BLUE)[DIGITAL]$(NC) Starting full hardening for $(DESIGN_TOP) using OpenLane2...\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Using PDK: $(PDK), Core Util: $(CORE_UTIL)%%\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Auto sizing: $(AUTO_SIZING)\n"
	@rm -rf $(NETLIST_DIR)
	openlane --pdk $(PDK) --pdk-root $(PDK_ROOT) \
		--run-tag $(DESIGN_TOP)_full \
		config.json
	rm -rf ng.ini
	@if [ -n "$(ANALOG_OUTPUT_DIR)" ]; then \
		printf "$(GREEN)[DIGITAL]$(NC) Copying outputs to linked analog project...\n"; \
		mkdir -p $(ANALOG_OUTPUT_DIR); \
		cp ./runs/$(DESIGN_TOP)_full/final/mag/$(DESIGN_TOP).mag $(ANALOG_OUTPUT_DIR)/; \
		cp ./runs/$(DESIGN_TOP)_full/final/spice/$(DESIGN_TOP).spice $(ANALOG_OUTPUT_DIR)/; \
		cp ./runs/$(DESIGN_TOP)_full/final/nl/$(DESIGN_TOP).nl.v $(ANALOG_OUTPUT_DIR)/; \
		cp ./runs/$(DESIGN_TOP)_full/final/gds/$(DESIGN_TOP).gds $(ANALOG_OUTPUT_DIR)/ 2>/dev/null || true; \
		cp ./runs/$(DESIGN_TOP)_full/final/lef/$(DESIGN_TOP).lef $(ANALOG_OUTPUT_DIR)/ 2>/dev/null || true; \
		printf "$(GREEN)[SUCCESS]$(NC) Digital outputs copied to analog project\n"; \
	fi
	rm -rf config.json
	rm -rf runs/

clean:
	@printf "$(BLUE)[DIGITAL]$(NC) Cleaning synthesis files...\n"
	@rm -rf config.json runs $(NETLIST_DIR) *.log
	@printf "$(GREEN)[SUCCESS]$(NC) Clean completed\n"
