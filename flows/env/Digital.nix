{ pkgs, uwasic-eda }:
let
  edaPackages = uwasic-eda.packages.${pkgs.system};
in
{
  packages = with pkgs; [
    # Simulation & Verification
    verilator
    yosys
    gtkwave
    python312Packages.cocotb

    # OpenLane Dependencies
    openroad
    tcl
    tk
    tclPackages.tcllib
    ruby
    stdenv.cc.cc.lib
    expat
    swig
    zlib
    gcc.cc.lib
  ];
  shellHook = ''
    # Point Python to find tkinter from Nix
    export PYTHONPATH="${pkgs.python312Packages.tkinter}/lib/python3.12/site-packages:$PYTHONPATH"
    export TCL_LIBRARY="${pkgs.tcl}/lib/tcl${pkgs.tcl.version}"
    export TK_LIBRARY="${pkgs.tk}/lib/tk${pkgs.tk.version}"
    export LD_LIBRARY_PATH="${pkgs.stdenv.cc.cc.lib}/lib:${pkgs.gcc.cc.lib}/lib:${pkgs.tk}/lib:${pkgs.tcl}/lib:${pkgs.expat}/lib:${pkgs.zlib}/lib:$LD_LIBRARY_PATH"

    # (venv already active from shell.nix)
    pip install openlane==2.3.10 >/dev/null 2>&1 || true
  '';
}
