include ../config.mk

# Tool
SLANG = slang

.all: lint
.PHONY: lint

lint:
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL for $(DESIGN)...\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL files: $(RTL_FILES)\n"
	@printf "$(BLUE)[DIGITAL]$(NC) Linting RTL Headers files: $(RTL_FILES_H)\n"
	$(SLANG) --top $(DESIGN_TOP) $(RTL_FILES) $(RTL_FILES_H);

clean:

