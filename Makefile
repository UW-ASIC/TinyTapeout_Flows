VERILOG_ROOT := $(shell pwd)

# OpenLane2 Config
OPENLANE2_ROOT ?= $(shell pwd)/openlane2
PDK ?= sky130A
PDK_ROOT ?= $(HOME)/.volare
SYNTHESIS_RESULTS_DIR := openlane

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
RED := \033[0;31m
YELLOW := \033[0;33m
NC := \033[0m

# Pure Digital Tasks
d-lint:
	cd test && make lint
d-synthesis:
	cd test && make synthesis
d-test-rtl:
	cd test && make -b test-rtl
d-verification:
	cd test && make verification
d-test:
	cd test && make -b test
d-clean:
	cd test && make clean
d-harden:
	cd test && make harden

# Pure Analog Tools


# Mixed-Signal Tasks
d-CreateNetlist:
	..

a-CreateNetlist:
	..


