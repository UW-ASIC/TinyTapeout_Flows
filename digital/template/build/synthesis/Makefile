include ../config.mk

# OpenLane2 Config
OPENLANE2_ROOT ?= $(shell pwd)/openlane2
PDK ?= sky130A
PDK_ROOT ?= $(HOME)/.volare
NETLIST_DIR := netlist

.PHONY: all synthesis harden clean create_config config.json

all: synthesis

create_config: config.json

config.json:
	rm -rf config.json
	@printf "$(BLUE)[DIGITAL]$(NC) Creating OpenLane2 config with explicit headers...\n"
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
	       printf ',\n        " ,%s"' "$$file" >> config.json; \
	     fi; \
	   done; \
	   echo "" >> config.json; \
	 fi
	@echo '    ],' >> config.json
	@echo '    "CLOCK_PORT": "clk",' >> config.json
	@echo '    "CLOCK_PERIOD": 10.0' >> config.json
	@echo '}' >> config.json

synthesis: create_config
	@printf "$(BLUE)[DIGITAL]$(NC) Starting synthesis for $(DESIGN_TOP) using OpenLane2...\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Using PDK: $(PDK)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Output directory: $(NETLIST_DIR)\n"
	@mkdir -p $(NETLIST_DIR)
	openlane --pdk $(PDK) --pdk-root $(PDK_ROOT) \
		--run-tag $(DESIGN_TOP)_synthesis \
		--to Yosys.Synthesis \
		config.json

harden: create_config
	@printf "$(BLUE)[DIGITAL]$(NC) Starting full hardening for $(DESIGN_TOP) using OpenLane2...\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Using PDK: $(PDK)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Output directory: $(NETLIST_DIR)\n"
	@mkdir -p $(NETLIST_DIR)
	openlane --pdk $(PDK) --pdk-root $(PDK_ROOT) \
		--run-tag $(DESIGN_TOP)_full \
		--last-run \
		config.json

clean:
	@printf "$(BLUE)[DIGITAL]$(NC) Cleaning synthesis files...\n"
	@rm -rf ../config.json runs $(NETLIST_DIR) *.log
	@printf "$(GREEN)[SUCCESS]$(NC) Clean completed\n"
