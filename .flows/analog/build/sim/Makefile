include ../config.mk

# Enforce Nix Shell
ifndef IN_NIX_SHELL
  $(error This Makefile must be run inside the nix-shell environment. Run ./env.sh first to enter the nix-shell)
endif

# Run the block's SpiceRack testbenches.
#
# A testbench here is just a Python script under ../../test/ that builds a circuit and
# runs an analysis. Same convention as the netlist scripts one stage over: the script is
# the interface, so a plain sweep and a full DesignBench with corners are the same kind
# of thing to this Makefile and neither needs a plugin API.
#
# Sizing lives in those scripts too. SpiceRack has sweeps, corners and metric extraction
# but no gm/Id or optimiser, so a sizing loop is Python you write — sweep, extract,
# adjust. There is deliberately no target here pretending otherwise.

TEST_DIR = ../../test
VA_OSDI_DIR = ../va/osdi

.PHONY: all sim test list clean

all: sim

## sim - run every testbench in ../../test/
sim: test

test:
	@if [ ! -d $(TEST_DIR) ]; then echo "No $(TEST_DIR)/ directory."; exit 0; fi
	@found=0; for f in $(TEST_DIR)/*.py; do \
		[ -f "$$f" ] || continue; found=1; \
		echo "=== $$f (backend: $(BACKEND)) ==="; \
		SPICERACK_BACKEND=$(BACKEND) OSDI_DIR=$$(cd $(VA_OSDI_DIR) 2>/dev/null && pwd) \
			python3 "$$f" || exit 1; \
	done; \
	if [ $$found -eq 0 ]; then \
		echo "No testbenches in $(TEST_DIR)/."; \
		echo "A testbench is a .py that builds a circuit and runs an analysis."; \
	fi

## list - which simulators this environment can actually reach
list:
	@echo "BACKEND = $(BACKEND)"
	@for s in ngspice vacask espice; do \
		if command -v $$s >/dev/null 2>&1; then echo "  $$s: available"; \
		else echo "  $$s: not on PATH"; fi; \
	done
	@python3 -c 'import spicerack; print("  spicerack:", spicerack.__name__, "ok")' 2>/dev/null \
		|| echo "  spicerack: not importable — re-enter ./env.sh"

clean:
	@rm -rf __pycache__ $(TEST_DIR)/__pycache__ *.raw *.log
	@echo "Clean complete"
