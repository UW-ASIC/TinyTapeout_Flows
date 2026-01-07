include ../config.mk

# Tool
VERILATOR = verilator

# Enforce Nix Shell
ifndef IN_NIX_SHELL
  $(error This Makefile must be run inside the nix-shell environment. Run ./env.sh first to enter the nix-shell)
endif

.all: lint
.PHONY: lint

lint:
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL for $(DESIGN)...\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL files: $(RTL_FILES)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL Headers files: $(RTL_FILES_H)\n"
	$(VERILATOR) --lint-only --top $(DESIGN_TOP) $(RTL_FILES) $(RTL_FILES_H);

clean:

