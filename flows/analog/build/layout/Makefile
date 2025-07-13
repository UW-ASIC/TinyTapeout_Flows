include ../config.mk
MAGIC = magic
.PHONY: layout export_layout clean
PARENT_OUTPUT_DIR = PARENT

layout:
	@echo "Opening magic for layout..."
	@echo "CREATING TOP FILE, THIS IS THE MAIN SUB-DIRECTORY"
	cp $(PDK_ROOT)/$(PDK)/libs.tech/magic/sky130A.magicrc .
	cd ../../layout && $(MAGIC) -rcfile ../build/layout/sky130A.magicrc -T sky130A -noconsole \
		-eval "set TOP_LEVEL_CELL_NAME $(TOP_LAYOUT)" \
		-source ../build/layout/tinytapeout_template.tcl
	@echo "Exporting to parent..."
	@if [ -n "$(PARENT_OUTPUT_DIR)" ]; then \
		echo "Copying final layout to parent project..."; \
		mkdir -p $(PARENT_OUTPUT_DIR); \
		cp ../../layout/$(TOP_LAYOUT).mag $(PARENT_OUTPUT_DIR)/; \
		cp ../../layout/$(TOP_LAYOUT).gds $(PARENT_OUTPUT_DIR)/ 2>/dev/null || true; \
		echo "Layout exported to parent project: $(PARENT_OUTPUT_DIR)"; \
	else \
		echo "No parent project configured - layout remains local"; \
	fi

clean:
	@echo "Cleaning generated files..."
	rm -rf ./netlist/*.spice
	rm -rf ./magic/*.ext ./magic/*.spice ./magic/*.sim
	rm -rf ./tinytapeout/
	rm -rf ./*_lvs.lyrdb ./*_drc.lyrdb ./*_netgen_lvs.out
	rm -rf ./openlane/runs/
	rm -rf ./gds_output ./reports ./magic
	find . -name "*.log" -delete
	find . -name "*.bak" -delete
	@echo "Clean complete"
