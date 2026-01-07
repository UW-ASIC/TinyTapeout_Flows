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
  ];
  shellHook = ''
    # (venv already active from shell.nix)
    pip install openlane==2.3.10 >/dev/null 2>&1 || true
  '';
}
