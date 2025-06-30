{ pkgs ? import <nixpkgs> {} }:
let
  xschem = pkgs.stdenv.mkDerivation rec {
    pname = "xschem";
    version = "3.4.6";
    src = pkgs.fetchFromGitHub {
      owner = "StefanSchippers";
      repo = "xschem";
      rev = "3.4.6";
      sha256 = "sha256-1jP1SJeq23XNkOQgcl2X+rBrlka4a04irmfhoKRM1j4=";
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

  magic-vlsi-old = pkgs.stdenv.mkDerivation rec {
    pname = "magic-vlsi";
    version = "8.3.466";
    src = pkgs.fetchurl {
      url = "http://opencircuitdesign.com/magic/archive/magic-${version}.tgz";
      sha256 = "sha256-HbkWS2cp1lz2UnAlbYbqYY7/7XrbUuq9axXrs8zt5FY=";
    };
    nativeBuildInputs = [ pkgs.python3 ];
    buildInputs = with pkgs; [
      cairo
      xorg.libX11
      m4
      mesa_glu
      ncurses
      tcl
      tcsh
      tk
      git
    ];
    enableParallelBuilding = true;
    configureFlags = [
      "--with-tcl=${pkgs.tcl}"
      "--with-tk=${pkgs.tk}"
      "--disable-werror"
    ];
    postPatch = ''
      patchShebangs scripts/*
    '';
    env.NIX_CFLAGS_COMPILE = "-Wno-implicit-function-declaration";
    meta = with pkgs.lib; {
      description = "VLSI layout tool written in Tcl";
      homepage = "http://opencircuitdesign.com/magic/";
      license = licenses.mit;
      maintainers = with maintainers; [ thoughtpolice ];
    };
  };

  netgen-old = pkgs.stdenv.mkDerivation rec {
    name = "netgen";
    version = "1.5.295";
    src = pkgs.fetchurl {
      url = "http://opencircuitdesign.com/netgen/archive/netgen-${version}.tgz";
      sha256 = "sha256-y2UBf564WefrDbIxSrFbNc1FxQfDdYzRORrJjRdkKrg=";
    };
    nativeBuildInputs = [ pkgs.python3 ];
    buildInputs = with pkgs; [
      tcl
      tk
      xorg.libX11
    ];
    enableParallelBuilding = true;
    configureFlags = [
      "--with-tcl=${pkgs.tcl}"
      "--with-tk=${pkgs.tk}"
    ];
    postPatch = ''
      find . -name "*.sh" -exec patchShebangs {} \; || true
    '';
    meta = with pkgs.lib; {
      description = "LVS netlist comparison tool";
      homepage = "http://opencircuitdesign.com/netgen/";
      license = licenses.mit;
      maintainers = with maintainers; [ thoughtpolice ];
    };

  };
in pkgs.mkShell {
  name = "template";
  buildInputs = with pkgs; [
    # Builds
    gnumake git python3

    # Digital design
    verilog slang verilator yosys gtkwave gaw
    # Pytest and Cocoatb setup
    python3Packages.pytest
    python3Packages.cocotb
    python3Packages.pip # requirements.txt

    # OpenRoad + dep
    openroad ruby stdenv.cc.cc.lib glibc expat zlib
    python3Packages.rich
    python3Packages.click
    python3Packages.tkinter
    python3Packages.pyyaml

    # Analog Design
    xschem ngspice netgen-old klayout magic-vlsi-old
    # For Data
    python3Packages.numpy
    python3Packages.matplotlib
    python3Packages.scipy

    # Graphics/GUI support
    xorg.libX11 xorg.libXpm xorg.libXt cairo xterm
    xorg.fontutil xorg.fontmiscmisc xorg.fontcursormisc dejavu_fonts liberation_ttf
  ];
  shellHook = ''
    export PROJECT_ROOT="$(pwd)"
    export TOOLS_DIR="$PROJECT_ROOT/.tools"
    mkdir -p "$TOOLS_DIR/bin"
    export PATH="$TOOLS_DIR/bin:$PATH"
    export LD_LIBRARY_PATH="${pkgs.stdenv.cc.cc.lib}/lib:${pkgs.glibc}/lib:${pkgs.expat}/lib:${pkgs.zlib}/lib:$LD_LIBRARY_PATH"
    export FONTCONFIG_FILE=${pkgs.fontconfig.out}/etc/fonts/fonts.conf
    export FONTCONFIG_PATH=${pkgs.fontconfig.out}/etc/fonts

    # PDK setup
    export PDK_ROOT="$HOME/.volare"
    export PDK="sky130A"
    export KLAYOUT_PATH="$PDK_ROOT/$PDK/libs.tech/klayout"
    
    # XSchem Setup
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
    
    # Download xschem_sky130 library
    volare enable --pdk sky130 0fe599b2afb6708d281543108caf8310912f54af

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
    echo "  - magic: $(magic --version 2>/dev/null || echo 'custom build ${magic-vlsi-old.version}')"
    echo "  - PDK: $PDK in $PDK_ROOT"
  '';
}
