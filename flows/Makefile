# Whenever a project type is created, we need a way of tracking the state/type of project
# analog, we cannot call any digital funcs, should error out
# digital, we cannot call any analog funcs, should error out
# mixed, Each Digital subdirectory, must be linked to an analog subdirectory, should error out if not, or let user link them by modify makefile (param of analog folder address becomes mandatory)

# if you call a create, it should error out if you try to call the same create or a different create a second time, you need to call DeleteAll, then create the project again
# I think for persistance create a .txt file in the same directory to check

CreateAnalogProject:
	# Create config.mk with NEEDED parameters in this make call
	# Parameters: PROJECT
	# PROJECT = template
	# TOP_SCHEMATIC = inverter
	# TOP_LAYOUT = inverter
	#
	# Make sure ../analog/ exists, switch to directory
	# Create Folder: library/, and git clone link (just put it as a variable of this file)
	# Create Folders: {build, layout, schematics, symbols} in subdirectory $(PROJECT)
	#
	# Switch to $(PROJECT)/build directory, so now we are in ../analog/$(PROJECT)/build from start
	# config.mk should be in this directory
	#
	# next create directory inside build: build/layout, build/schematic, build/validation
	# move ./analog/build/layout/* into that build/layout/ folder
	# move ./analog/build/schematic/* into that build/schematic folder
	# move ./analog/build/validation/* into that build/validation/ folder
	# Note: ./analog, refers to our original directory
	#
	# Final Step: modify caravel to make it an analog project (leave this as a comment for now)

AddAnalogModule:
	# create another subdirectory $(project), same as above, createanalogproject = addanalogmodule, except it doesn't modify caravel

CreateDigitalProject:
	# Create config.mk with NEEDED parameters in this make call
	# Parameters: PROJECT
	#DESIGN_TOP := counter# Top .sv or .v file (REQUEST THIS FROM CALL to MAKE FUNC)
	#RTL_FILES := $(shell find ../../src -name "*.v" -o -name "*.sv")
	#RTL_FILES_H := $(shell find ../../src -name "*.vh" -o -name "*.svh")
	#TB_FILES := $(shell find ../../test -name "*_tb.v" -o -name "tb_*.v")

	# ===============================
	# Verification Setup
	# ===============================
	#COCOTB_TEST_FILES := $(shell find ../../test -name "test_*.py")

	# Make sure these sync up, each index will be run with its partner
	#TOPLEVEL_TB_MODULES := tb_counter (REQUEST THIS FROM CALL to MAKE FUNC)
	#MODULE_TESTS := test_counter (REQUEST THIS FROM CALL to MAKE FUNC)
	# OPTIONAL PARAM: (Analog folder address, just say name, and this only works if it is a mixed-project, if not remove it)
	#
	# Create Folders: {build, src, test} in subdirectory $(PROJECT)
	#
	# Switch to $(PROJECT)/build directory, so now we are in ../digital/$(PROJECT)/build from start
	# config.mk should be in this directory
	#
	# next create directory inside build: build/layout, build/schematic, build/validation
	# move ./digital/build/des_tb/* into that build/des_tb/ folder
	# move ./digital/build/lint/* into that build/lint/ folder
	# move ./digital/build/synthesis/* into that build/synthesis/ folder
	# move ./digital/build/verification/* into that build/verification/ folder
	# Note: ./digital, refers to our original directory
	#
	# Final Step: modify caravel to make it an digital project (leave this as a comment for now)

AddDigitalModule:
	# create another subdirectory $(project), same as above, createdigitalproject = adddigitalmodule, except it doesn't modify caravel

CreateMixedProject:
	# call both CreateDigitalproject and CreateAnalogProject if they haven't already
	#
	# Modify caravel to support mixed project (leave this as a comment for now)

DeleteAll:
