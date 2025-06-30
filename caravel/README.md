## Final Step before fab
#### Description:

Before submitting it for fab, we have to place it in this format used for analog submissions, I have a makefile made specifically for ensuring that the format is correct and placed in this format that grabs files from the analog/ and digital/ directory with the same project name set up here.

#### How am I making this mixed-signal?

Include the digital project into the analog workflow to make the whole project appear analog to tinytapeout

#### Required Project Structure
gds/ : includes all the gds files used or produced from the project.
def : includes all the def files used or produced from the project.
lef/ : includes all the lef files used or produced from the project.
mag/ : includes all the mag files used or produced from the project.
verilog/ : includes the pin definitions used.
info.yaml: includes all the info required in this example. Please make sure that you are pointing to an elaborated caravel netlist as well as a synthesized gate-level-netlist for the user_project_wrapper

#### Sources:
https://github.com/efabless/caravel

https://github.com/iic-jku/tt05-analog-test/tree/main
https://github.com/mattvenn/tt05-analog-test/tree/main

