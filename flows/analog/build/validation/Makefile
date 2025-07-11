include ../config.mk

KLAYOUT = klayout
MAGIC = magic
NETGEN = netgen
OPENLANE = openlane
NETLIST_FILE = ../schematic/spice/$(TOP_LAYOUT).spice

.PHONY: klayout_test klayout_lvs klayout_drc magic_test magic_extract magic_extract_manual magic_drc magic_lvs \
        netgen_lvs full_verification debug clean help

help:
	@echo "Available targets:"
	@echo "  magic_test         - Run Magic DRC and LVS"
	@echo "  magic_extract      - Extract netlist from Magic layout"
	@echo "  magic_drc          - Run Magic DRC check"
	@echo "  magic_lvs          - Run Magic LVS check"
	@echo "  klayout_test       - Run KLayout DRC and LVS"
	@echo "  klayout_drc        - Run KLayout DRC verification"
	@echo "  klayout_lvs        - Run KLayout LVS verification"
	@echo "  netgen_lvs         - Run standalone Netgen LVS"
	@echo "  full_verification  - Run complete verification suite"
	@echo "  clean              - Clean all verification files"
	@echo "  help               - Show this help message"

# Magic-based verification flow
magic_extract:
	@echo "Extracting netlist from Magic layout..."
	@mkdir -p ./magic ./reports
	cp $(PDK_ROOT)/$(PDK)/libs.tech/magic/sky130A.magicrc .
	@if [ -f "../../layout/$(TOP_LAYOUT).mag" ]; then \
		cd ../../layout && echo "load $(TOP_LAYOUT); extract all; ext2spice lvs; ext2spice short resistor; ext2spice; quit -noprompt" | \
		$(MAGIC) -dnull -noconsole -rcfile ../build/verification/sky130A.magicrc; \
		echo "Files created in layout directory:"; \
		ls -la $(TOP_LAYOUT).* 2>/dev/null || echo "No extracted files found"; \
		echo "Moving extracted files..."; \
		mv $(TOP_LAYOUT).ext ../build/verification/magic/ 2>/dev/null || echo "No .ext file to move"; \
		mv $(TOP_LAYOUT).spice ../build/verification/magic/ 2>/dev/null || echo "No .spice file to move"; \
		echo "Files now in magic directory:"; \
		ls -la ../build/verification/magic/ 2>/dev/null || echo "Magic directory empty"; \
	else \
		echo "Error: Layout file ../../layout/$(TOP_LAYOUT).mag not found"; \
		exit 1; \
	fi
	@echo "Cleaning up temporary files..."
	@rm -f *.log *.out *.txt magic_*.* .magic_*.* core.* 2>/dev/null || true
	@rm -f sky130A.magicrc

magic_drc:
	@echo "Running Magic DRC check..."
	@mkdir -p ./reports
	cp $(PDK_ROOT)/$(PDK)/libs.tech/magic/sky130A.magicrc .
	@if [ -f "../../layout/$(TOP_LAYOUT).mag" ]; then \
		cd ../../layout && echo "load $(TOP_LAYOUT); drc check; drc count; quit -noprompt" | \
		$(MAGIC) -dnull -noconsole -rcfile ../build/verification/sky130A.magicrc > ../build/verification/reports/magic_drc.log 2>&1; \
	fi
	@echo "Magic DRC report saved to reports/magic_drc.log"
	@echo "Cleaning up temporary files..."
	@rm -f *.log *.out *.txt magic_*.* .magic_*.* core.* 2>/dev/null || true
	@rm -f sky130A.magicrc

magic_lvs: magic_extract
	@echo "Running Magic-based LVS check..."
	@mkdir -p ./reports
	@echo "Checking for files:"
	@echo "  Layout netlist: ./magic/$(TOP_LAYOUT).spice"
	@ls -la ./magic/$(TOP_LAYOUT).spice 2>/dev/null || echo "  ✗ Layout netlist not found"
	@echo "  Schematic netlist: $(NETLIST_FILE)"
	@ls -la $(NETLIST_FILE) 2>/dev/null || echo "  ✗ Schematic netlist not found"
	@if [ -f "./magic/$(TOP_LAYOUT).spice" ] && [ -f "$(NETLIST_FILE)" ]; then \
		echo "Running LVS comparison..."; \
		$(NETGEN) -batch lvs "./magic/$(TOP_LAYOUT).spice $(TOP_LAYOUT)" \
		"$(NETLIST_FILE) $(TOP_LAYOUT)" > ./reports/magic_lvs.log 2>&1; \
		echo "Magic LVS report saved to reports/magic_lvs.log"; \
	elif [ -f "./magic/$(TOP_LAYOUT).spice" ]; then \
		echo "Warning: Schematic netlist $(NETLIST_FILE) not found, skipping LVS"; \
	elif [ -f "$(NETLIST_FILE)" ]; then \
		echo "Warning: Layout netlist ./magic/$(TOP_LAYOUT).spice not found, skipping LVS"; \
	else \
		echo "Warning: Both netlists missing, skipping LVS"; \
	fi

magic_test: magic_drc magic_lvs
	@echo "Magic verification suite completed"

# Netgen standalone LVS
netgen_lvs: magic_extract
	@echo "Running standalone Netgen LVS..."
	@mkdir -p ./reports
	@echo "Checking for files:"
	@echo "  Schematic netlist: $(NETLIST_FILE)"
	@ls -la $(NETLIST_FILE) 2>/dev/null || echo "  ✗ Schematic netlist not found"
	@echo "  Layout netlist: ./magic/$(TOP_LAYOUT).spice"
	@ls -la ./magic/$(TOP_LAYOUT).spice 2>/dev/null || echo "  ✗ Layout netlist not found"
	@if [ -f "$(NETLIST_FILE)" ] && [ -f "./magic/$(TOP_LAYOUT).spice" ]; then \
		echo "Running Netgen LVS..."; \
		$(NETGEN) -batch lvs "$(NETLIST_FILE) $(TOP_LAYOUT)" \
		"./magic/$(TOP_LAYOUT).spice $(TOP_LAYOUT)" \
		$(PDK_ROOT)/$(PDK)/libs.tech/netgen/$(PDK)_setup.tcl \
		./reports/netgen_lvs_report.out; \
	else \
		echo "Warning: Netlist files not found, skipping Netgen LVS"; \
	fi

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
			cd ../../layout && echo "load $$basename; gds write ../build/verification/gds_output/$$basename.gds; quit -noprompt" | $(MAGIC) -dnull -noconsole -rcfile ../build/verification/sky130A.magicrc; \
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

# Comprehensive verification suite
full_verification: magic_test klayout_test netgen_lvs
	@echo "=== FULL VERIFICATION SUMMARY ==="
	@echo "Local reports in ./reports/:"
	@ls -la ./reports/ 2>/dev/null || echo "No local reports found"
	@echo "GDS files in ./gds_output/:"
	@ls -la ./gds_output/ 2>/dev/null || echo "No GDS files found"
	@echo "Extracted netlists in ./magic/:"
	@ls -la ./magic/ 2>/dev/null || echo "No extracted netlists found"
	@echo "================================="

clean:
	@echo "Cleaning verification files..."
	rm -rf ./gds_output ./reports ./magic
	rm -rf ./*_lvs.lyrdb ./*_drc.lyrdb ./*_netgen_lvs.out
	find . -name "*.log" -delete
	find . -name "*.bak" -delete
	@echo "Verification clean complete"
