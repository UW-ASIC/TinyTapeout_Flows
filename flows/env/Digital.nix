{ pkgs }:
{
  packages = with pkgs; [
    verilator
    yosys
    gtkwave
    
    # OpenLane Dependencies
    ruby
    stdenv.cc.cc.lib
    expat
    swig
    zlib
  ];

  shellHook = ''
    # === Digital Tools Configuration ===
  '';
}
