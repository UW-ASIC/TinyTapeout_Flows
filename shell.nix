{ pkgs ? import <nixpkgs> {} }:
let
  xschem = pkgs.stdenv.mkDerivation rec {
    pname = "xschem";
    version = "3.4.6";
    src = pkgs.fetchFromGitHub {
      owner = "StefanSchippers";
      repo = "xschem";
      rev = "3.4.6";
      sha256 = "sha256-dYMNzTLbKw1YQKdhrTI3IsDvVmdCAWFzg6uo957oHYU=";
    };
    nativeBuildInputs = with pkgs; [
      pkg-config autoconf automake
    ];
    buildInputs = with pkgs; [
      tcl tk xorg.libX11 xorg.libXpm cairo
      readline flex bison zlib
    ];
    configureFlags = [
      "--prefix=${placeholder "out"}"
    ];
    buildPhase = ''
      make
    '';
      
    installPhase = ''
      make install
    '';
    meta = {
      description = "Schematic capture and netlisting EDA tool";
      homepage = "https://xschem.sourceforge.io/";
      platforms = pkgs.lib.platforms.linux;
    };
  };
in pkgs.mkShell {
  name = "template";
  buildInputs = with pkgs; [
    # Builds
    gnumake git

    # Digital design
    verilog
    slang
    gtkwave
    verilator
    yosys
    openroad
    ruby # below are openroad dep
    stdenv.cc.cc.lib
    glibc
    expat
    zlib

    # Analog Design
    xschem
    gaw
    ngspice
    netgen
    klayout
    magic-vlsi
    xterm

    # Python
    python3
    python3Packages.rich
    python3Packages.click
    python3Packages.tkinter
    python3Packages.pip # requirements.txt
    python3Packages.numpy
    python3Packages.matplotlib
    python3Packages.scipy
    python3Packages.pyyaml

    # Graphics/GUI support
    xorg.libX11 xorg.libXpm xorg.libXt cairo
  ];
  shellHook = ''
    export PROJECT_ROOT="$(pwd)"
    export TOOLS_DIR="$PROJECT_ROOT/.tools"
    mkdir -p "$TOOLS_DIR/bin"
    export PATH="$TOOLS_DIR/bin:$PATH"
    export LD_LIBRARY_PATH="${pkgs.stdenv.cc.cc.lib}/lib:${pkgs.glibc}/lib:${pkgs.expat}/lib:${pkgs.zlib}/lib:$LD_LIBRARY_PATH"
  

    # PDK setup
    export PDK_ROOT="''${PDK_ROOT:-$HOME/.volare}"
    export PDK="''${PDK:-sky130A}"
    export KLAYOUT_PATH="$PDK_ROOT/$PDK/libs.tech/klayout"

    # xschem setup for sky130A
    export XSCHEM_USER_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem"
    export XSCHEM_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem:${xschem}/share/xschem/xschem_library"

    # Setup Python virtual environment
    export VENV_DIR="$PROJECT_ROOT/.venv"
    if [ ! -d "$VENV_DIR" ]; then
        echo "Creating Python virtual environment..."
        python -m venv "$VENV_DIR"
    fi

    # Activate virtual environment
    source "$VENV_DIR/bin/activate"
    pip install --upgrade \
        volare==0.20.6 \
        openlane==2.3.10 \
        cace==2.6.0

    # Install PDK if not present
    if [ ! -d "$PDK_ROOT/$PDK" ]; then
      echo "Installing PDK $PDK..."
      volare enable --pdk $PDK
    fi

    # Download xschem_sky130 library if not present
    if [ ! -d "$PDK_ROOT/$PDK/libs.tech/xschem_sky130" ]; then
      echo "Installing xschem_sky130 library..."
      cd "$PDK_ROOT/$PDK/libs.tech/"
      git clone https://github.com/StefanSchippers/xschem_sky130.git
      cd "$PROJECT_ROOT"
    fi

    # Create ngspice init file for faster sky130 simulation
    mkdir -p "$HOME/.xschem/simulations"
    if [ ! -f "$HOME/.xschem/simulations/.spiceinit" ]; then
      cat > "$HOME/.xschem/simulations/.spiceinit" << 'EOF'
set ngbehavior=hsa
set ng_nomodcheck
set num_threads=4
EOF
    fi

    echo "System tools available:"
    echo "  - xschem: $(xschem --version 2>/dev/null || echo 'custom build')"
    echo "  - yosys: $(yosys -V 2>/dev/null | head -1 || echo 'unknown version')"
    echo "  - ngspice: $(ngspice --version 2>/dev/null | head -1 || echo 'unknown version')"
    echo "  - verilator: $(verilator --version 2>/dev/null | head -1 || echo 'unknown version')"
    echo "  - PDK: $PDK in $PDK_ROOT"
  '';
}
