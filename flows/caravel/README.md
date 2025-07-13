# Before Pushing: Configure info.yaml

## Required Project Information
```yaml
project:
  title:        "Your Project Name"
  author:       "Your Name"
  description:  "Brief one-line description"
  language:     "Analog"           # or Verilog, SystemVerilog
  clock_hz:     0                  # Clock frequency in Hz (0 if N/A)
  tiles:        "1x2"              # Tile configuration (check def/ for options)
  analog_pins:  0                  # Number of analog pins used (0-6)
  top_module:   "tt_um_$(PROJECT_NAME)"
  source_files: 
    - "project.v"                  # Use glob patterns for multiple files
```

## Pin Configuration
Fill in descriptive names for pins you're using (e.g., RX, TX, CLK, RESET):

```yaml
pinout:
  # Inputs (ui[0] through ui[7])
  ui[0]: "clock"
  ui[1]: "reset"
  ui[2]: ""                        # Leave unused pins blank
  
  # Outputs (uo[0] through uo[7])
  uo[0]: "data_out"
  uo[1]: ""
  
  # Bidirectional (uio[0] through uio[7])
  uio[0]: "sda"
  uio[1]: "scl"
  
  # Analog pins (ua[0] through ua[5])
  ua[0]: "analog_in"               # Only if analog_pins > 0
```

**Note:** Set `analog_pins` count above or analog pins won't be connected.
