include ../config.mk

# Tool
IVERILOG = iverilog
VVP = vvp

.PHONY: test-rtl clean
.all: test-rtl

test-rtl:
	@printf "$(BLUE)[DIGITAL]$(NC) Running RTL simulation for $(DESIGN_TOP)...\n"
	@mkdir -p simulations
	@printf "$(BLUE)[DIGITAL]$(NC) Found testbench files: $(TB_FILES)\n"
	@$(foreach tb,$(TB_FILES), \
		tb_name=$$(basename $(tb) .v); \
		printf "$(BLUE)[DIGITAL]$(NC) Running simulation with $(tb)\n"; \
		$(IVERILOG) -o simulations/$${tb_name}.vvp $(RTL_FILES) $(tb); \
		if [ $$? -eq 0 ]; then \
			cd simulations && $(VVP) $${tb_name}.vvp && cd ..; \
			if [ $$? -eq 0 ]; then \
				printf "$(GREEN)[SUCCESS]$(NC) Simulation passed for $(tb)\n"; \
			else \
				printf "$(RED)[ERROR]$(NC) Simulation failed for $(tb)\n"; \
			fi; \
		else \
			printf "$(RED)[ERROR]$(NC) Compilation failed for $(tb)\n"; \
		fi; \
	)

clean:
	rm -rf simulations
