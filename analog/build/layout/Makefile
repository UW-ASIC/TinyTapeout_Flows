include ../config.mk

KLAYOUT = klayout
MAGIC = magic
NETGEN = netgen
OPENLANE = openlane

NETLIST_FILE = ../schematic/spice/$(TOP_LAYOUT).spice

# We use magic for layout, but then use klayout for its sim capabilities
.PHONY: layout klayout_test klayout_lvs klayout_drc clean

layout:
	@echo "Opening magic for layout..."
	@if [ ! -f "../../layout/$(TOP_LAYOUT).sch" ]; then \
		echo "Creating empty layout file: $(TOP_LAYOUT).mag"; \
		touch ../../layout/$(TOP_LAYOUT).mag; \
	fi
	cp $(PDK_ROOT)/$(PDK)/libs.tech/magic/sky130A.magicrc .
	cd ../../layout && $(MAGIC) -rcfile ../build/layout/sky130A.magicrc $(TOP_LAYOUT).mag

# internal, DO NOT USE
magic_to_gds:
	@echo "Converting all Magic layouts to GDS..."
	@mkdir -p ./gds_output
	@echo "Copying magicrc file..."
	cp $(PDK_ROOT)/$(PDK)/libs.tech/magic/sky130A.magicrc .
	@for magfile in ../../layout/*.mag; do \
		if [ -f "$$magfile" ]; then \
			basename=$$(basename "$$magfile" .mag); \
			echo "Converting $$basename.mag..."; \
			cd ../../layout && echo "load $$basename; gds write ../build/layout/gds_output/$$basename.gds; quit -noprompt" | $(MAGIC) -dnull -noconsole -rcfile ../build/layout/sky130A.magicrc; \
		fi; \
	done
	@echo "Cleaning up temporary files..."
	@rm -f *.log *.out *.txt magic_*.* .magic_*.* core.* 2>/dev/null || true
	@rm -f *.ext *.sim *.spice 2>/dev/null || true
	@rm -f sky130A.magicrc

klayout_test: klayout_drc klayout_lvs

klayout_drc: magic_to_gds
	@echo "Running KLayout DRC verification..."
	@mkdir -p ./reports
	$(KLAYOUT) -b -rd input="./gds_output/$(TOP_LAYOUT).gds" \
		-rd report="$(CURDIR)/reports/drc_report.txt" \
		-r $(PDK_ROOT)/$(PDK)/libs.tech/klayout/drc/$(PDK).lydrc

klayout_lvs: magic_to_gds  
	@echo "Running KLayout LVS verification..."
	@mkdir -p ./reports
	$(KLAYOUT) -b -rd input="./gds_output/$(TOP_LAYOUT).gds" \
		-rd schematic="$(abspath $(NETLIST_FILE))" \
		-rd report="$(CURDIR)/reports/lvs_report.txt" \
		-rd verbose=true \
		-r $(PDK_ROOT)/$(PDK)/libs.tech/klayout/lvs/sky130.lvs

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
