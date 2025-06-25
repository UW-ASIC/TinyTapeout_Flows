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
    meta = {
      description = "Schematic capture and netlisting EDA tool";
      homepage = "https://xschem.sourceforge.io/";
      platforms = pkgs.lib.platforms.linux;
    };
  };
in pkgs.mkShell {
  name = "mixed-signal-asic";
  buildInputs = with pkgs; [
    cachix
    # Core tools
    git bash coreutils gnumake gcc cmake pkg-config
    # Digital design
    verilog gtkwave slang
    # Analog/Mixed-signal tools
    ngspice magic-vlsi netgen
    xschem
    # Python with essential packages - include PyYAML from nixpkgs
    python3
    python3Packages.pip
    python3Packages.virtualenv
    python3Packages.pyyaml
    python3Packages.numpy
    python3Packages.matplotlib
    python3Packages.scipy
    python3Packages.pandas
    python3Packages.cython
    python3Packages.setuptools
    python3Packages.wheel
    python3Packages.cffi
    libyaml
    verilator
    yosys
    # System libraries needed for OpenLane2 and EDA tools
    stdenv.cc.cc.lib
    glibc
    zlib
    libffi
    openssl
    # C++ standard library for libparse and other native extensions
    gcc-unwrapped.lib
    libcxx
    # SWIG for libparse compilation
    swig
    # Graphics/GUI support
    xorg.libX11 xorg.libXpm xorg.libXt cairo
    tcl tk readline zlib ncurses
    # Utilities
    wget curl unzip tree nix
  ];
  shellHook = ''
    # Setup cachix
    cachix use mixed-signal-asic || echo "Creating new cachix cache"
    export PROJECT_ROOT="$(pwd)"
    export TOOLS_DIR="$PROJECT_ROOT/.tools"
    mkdir -p "$TOOLS_DIR/bin"
    export PATH="$TOOLS_DIR/bin:$PATH"

    # Setup Python virtual environment
    export VENV_DIR="$PROJECT_ROOT/.venv"
    if [ ! -d "$VENV_DIR" ]; then
      echo "Creating Python virtual environment..."
      python -m venv "$VENV_DIR"
    fi

    # Activate virtual environment
    source "$VENV_DIR/bin/activate"

    # Set up library paths for native extensions
    export LD_LIBRARY_PATH="${pkgs.stdenv.cc.cc.lib}/lib:${pkgs.glibc}/lib:${pkgs.gcc-unwrapped.lib}/lib:${pkgs.libcxx}/lib:$LD_LIBRARY_PATH"

    # Upgrade pip and install requirements if they exist
    pip install --upgrade pip
    if [ -f requirements.txt ]; then
      echo "Installing requirements from requirements.txt..."
      pip install -r requirements.txt
    else
      echo "No requirements.txt found, skipping pip install"
    fi

    # PDK setup (inherited from OpenLane2 shell)
    export PDK_ROOT="''${PDK_ROOT:-$HOME/.volare}"
    export PDK="''${PDK:-sky130A}"
    export MAGICRC="$PDK_ROOT/$PDK/libs.tech/magic/$PDK.magicrc"

    # Install PDK if not present
    if [ ! -d "$PDK_ROOT/$PDK" ]; then
      echo "Installing PDK $PDK..."
      volare enable --pdk $PDK
    fi

    echo ""
    echo "Mixed-Signal ASIC Environment Ready"
    echo "PDK: $PDK at $PDK_ROOT"
    echo "Virtual Environment: $VENV_DIR (activated)"
    echo "Python: $(which python)"
    echo "PyYAML Version: $(python -c 'import yaml; print(yaml.__version__)' 2>/dev/null || echo 'Not installed')"
    echo "Tools: $(command -v ngspice >/dev/null && echo "✓ NGSpice") $(command -v magic >/dev/null && echo "✓ Magic") $(command -v xschem >/dev/null && echo "✓ XSchem") $(command -v klayout >/dev/null && echo "✓ KLayout")"

    # Test OpenLane2 and libparse imports
    if python -c "import openlane" 2>/dev/null; then
      echo "✓ OpenLane2 import successful"
    else
      echo "✗ OpenLane2 import failed - check dependencies"
    fi
    if python -c "import libparse" 2>/dev/null; then
      echo "✓ libparse import successful"
    else
      echo "✗ libparse import failed - check dependencies"
    fi
  '';
}
