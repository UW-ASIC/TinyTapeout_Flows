# Variables
KLAYOUT = klayout
MAGIC = magic
NETGEN = netgen
OPENLANE = openlane

# Design-specific variables (set these for your project)
TOP_CELL ?= your_design_name
PDK ?= sky130A
NETLIST_FILE ?= netlist/$(TOP_CELL).spice
BLACKBOX_PATH ?= ./blackbox_libs

.PHONY: layout integrate_black_box klayout_all_tests klayout_test1 klayout_test2 magic_to_gds clean

# We use magic for layout, but then use klayout for its sim capabilities

# Layout-Level Tasks
layout:
	@echo "Opening magic for layout..."
	@mkdir -p ./magic
	cd magic && $(MAGIC) -rcfile $(PDK_ROOT)/libs.tech/magic/sky130A.magicrc

# Convert Magic files to GDS for KLayout testing
magic_to_gds:
	@echo "Converting Magic layout to GDS..."
	@mkdir -p ./gds_output
	cd magic && $(MAGIC) -dnull -noconsole -T $(PDK) << EOF
	load $(TOP_CELL)
	gds write ../gds_output/$(TOP_CELL).gds
	quit -noprompt
	EOF

# Take digital design .gds files and create a layout file as a blackbox that can be used as an include for the other layouts
integrate_black_box: magic_to_gds
	@echo "Integrating black box design..."
	@mkdir -p ./integrated
	$(KLAYOUT) -b -rd input_gds="./gds_output/$(TOP_CELL).gds" \
		-rd blackbox_path="$(BLACKBOX_PATH)" \
		-rd output_gds="./integrated/integrated_design.gds" \
		-r scripts/integrate_blackboxes.rb

klayout_all_tests: klayout_test1 klayout_test2

klayout_test1: magic_to_gds
	@echo "Running KLayout DRC verification..."
	@mkdir -p ./reports
	$(KLAYOUT) -b -rd input="./gds_output/$(TOP_CELL).gds" \
		-rd report="./reports/drc_report.txt" \
		-r $(PDK_ROOT)/$(PDK)/libs.tech/klayout/drc/$(PDK).drc

klayout_test2: magic_to_gds  
	@echo "Running KLayout LVS verification..."
	@mkdir -p ./reports
	$(KLAYOUT) -b -rd input="./gds_output/$(TOP_CELL).gds" \
		-rd schematic="$(NETLIST_FILE)" \
		-rd report="./reports/lvs_report.txt" \
		-r $(PDK_ROOT)/$(PDK)/libs.tech/klayout/lvs/$(PDK).lvs

clean:
	@echo "Cleaning generated files..."
	rm -rf ./netlist/*.spice
	rm -rf ./magic/*.ext ./magic/*.spice ./magic/*.sim
	rm -rf ./tinytapeout/
	rm -rf ./*_lvs.lyrdb ./*_drc.lyrdb ./*_netgen_lvs.out
	rm -rf ./openlane/runs/
	find . -name "*.log" -delete
	find . -name "*.bak" -delete
	@echo "Clean complete"
