#!/usr/bin/tclsh
# Extract parasitics from layout
# Usage: magic -dnull -noconsole -rcfile $MAGICRC -script extract_analog.tcl design_name

if {$argc < 1} {
    puts "Error: Missing design name argument"
    exit 1
}

set design_name [lindex $argv 0]
puts "Extracting parasitics for $design_name"

# Load the layout
load $design_name

# Extract parasitics
extract all
ext2spice lvs
ext2spice -o $design_name.ext.spice

puts "Extraction complete: $design_name.ext.spice"
quit -noprompt
