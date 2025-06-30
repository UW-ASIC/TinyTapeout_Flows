CACE = cace
CARAVEL_ROOT = caravel

.PHONY: cace_testing clean

# Verification
cace_testing:
	@echo "Running CACE characterization..."
	@if [ ! -f "./cace/$(PROJECT).yaml" ] && [ ! -f "./cace.yaml" ]; then \
		echo "Error: CACE specification file not found."; \
		echo "Looking for: ./cace/$(PROJECT).yaml or ./cace.yaml"; \
		exit 1; \
	fi
	@if [ -f "./cace/$(PROJECT).yaml" ]; then \
		$(CACE) ./cace/$(PROJECT).yaml --source=rcx; \
	else \
		$(CACE) ./cace.yaml --source=rcx; \
	fi

create_final_file:
	caraval

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
