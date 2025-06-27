.PHONY: d-lint d-synthesis d-test-rtl d-verification d-test d-clean d-harden
d-all: d-lint d-synthesis d-test-rtl d-verification d-test d-clean d-harden

# Pure Digital Tasks
d-lint:
	cd digital && make lint
d-synthesis:
	cd digital && make synthesis
d-test-rtl:
	cd digital && make -b test-rtl
d-verification:
	cd digital && make verification
d-test:
	cd digital && make -b test
d-clean:
	cd digital && make clean
d-harden:
	cd digital && make harden

# Pure Analog Tools


# Mixed-Signal Tasks
d-CreateNetlist:
	..

a-CreateNetlist:
	..

delete_apps:
	rm -rf .tools
	rm -rf .venv
