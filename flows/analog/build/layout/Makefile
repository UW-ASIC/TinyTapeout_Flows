include ../config.mk

MAGIC = magic
.PHONY: layout clean

layout:
	@echo "Opening magic for layout..."
	@if [ ! -f "../../layout/$(TOP_LAYOUT).mag" ]; then \
		echo "Creating empty layout file: $(TOP_LAYOUT).mag"; \
		touch ../../layout/$(TOP_LAYOUT).mag; \
	fi
	cp $(PDK_ROOT)/$(PDK)/libs.tech/magic/sky130A.magicrc .
	cd ../../layout && $(MAGIC) -rcfile ../build/layout/sky130A.magicrc $(TOP_LAYOUT).mag

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
