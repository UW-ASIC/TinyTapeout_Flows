{ pkgs }:
let
  selfBuiltPackages = {
    ngspice-shared = pkgs.ngspice.override {
      withNgshared = true;
    };

    netgen = pkgs.stdenv.mkDerivation rec {
      name = "netgen";
      version = "1.5.305";
      src = pkgs.fetchurl {
        url = "http://opencircuitdesign.com/netgen/archive/netgen-${version}.tgz";
        sha256 = "sha256-U9m/pIydfRSlsEWhLDDFsC8+C0Fn3DgYQrwVDETn4Zg=";
      };
      nativeBuildInputs = [pkgs.python312];
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
      NIX_CFLAGS_COMPILE = "-O2";
      postPatch = ''
        find . -name "*.sh" -exec patchShebangs {} \; || true
      '';
      meta = with pkgs.lib; {
        description = "LVS netlist comparison tool";
        homepage = "http://opencircuitdesign.com/netgen/";
        license = licenses.mit;
        maintainers = with maintainers; [thoughtpolice];
      };
    };

    xschem = pkgs.stdenv.mkDerivation rec {
      name = "xschem";
      version = "3.4.7";
      src = pkgs.fetchFromGitHub {
        owner = "StefanSchippers";
        repo = "xschem";
        rev = "3.4.7";
        sha256 = "sha256-ye97VJQ+2F2UbFLmGrZ8xSK9xFeF+Yies6fJKurPOD0=";
      };

      nativeBuildInputs =
        [
          pkgs.bison
          pkgs.flex
          pkgs.pkg-config
        ]
        ++ pkgs.lib.optionals pkgs.stdenv.hostPlatform.isDarwin [
          pkgs.fixDarwinDylibNames
        ];
      buildInputs = with pkgs; [
        tcl
        tk
        xorg.libX11
        xorg.libXpm
        cairo
        readline
        flex
        bison
        zlib
      ];
      enableParallelBuilding = true;
      NIX_CFLAGS_COMPILE = "-O2";
      hardeningDisable = ["format"];
      meta = with pkgs.lib; {
        description = "Schematic capture and netlisting EDA tool";
        longDescription = ''
          Xschem is a schematic capture program, it allows creation of
          hierarchical representation of circuits with a top down approach.
          By focusing on interfaces, hierarchy and instance properties a
          complex system can be described in terms of simpler building
          blocks. A VHDL or Verilog or Spice netlist can be generated from
          the drawn schematic, allowing the simulation of the circuit.
        '';
        homepage = "https://xschem.sourceforge.io/stefan/";
        license = licenses.gpl2Plus;
        maintainers = with maintainers; [fbeffa];
      };
    };
  };
in
{
  packages = [
    selfBuiltPackages.xschem
    selfBuiltPackages.ngspice-shared
    selfBuiltPackages.netgen
    pkgs.ngspice
    pkgs.magic-vlsi
    pkgs.klayout
    pkgs.cargo
  ];

  shellHook = ''
    # === Analog Tools Configuration ===
    export BINDGEN_EXTRA_CLANG_ARGS="-I${selfBuiltPackages.ngspice-shared}/include $BINDGEN_EXTRA_CLANG_ARGS"
    export CPATH="${selfBuiltPackages.ngspice-shared}/include:$CPATH"
    export NIX_LD_LIBRARY_PATH="${selfBuiltPackages.ngspice-shared}/lib:$NIX_LD_LIBRARY_PATH"
    export PKG_CONFIG_PATH="${selfBuiltPackages.ngspice-shared}/lib/pkgconfig:$PKG_CONFIG_PATH"
    
    export KLAYOUT_PATH="$PDK_ROOT/$PDK/libs.tech/klayout"
    export XSCHEM_USER_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem"
    export XSCHEM_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem:${selfBuiltPackages.xschem}/share/xschem/xschem_library"

    # === Rust Toolchain Setup (Analog) ===
    export RUSTUP_HOME="$HOME/.rustup"
    export CARGO_HOME="$HOME/.cargo"
    export PATH="$CARGO_HOME/bin:$PATH"
    
    # Rust-Python Build Config
    export LIBCLANG_PATH="${pkgs.llvmPackages.libclang.lib}/lib"
    export BINDGEN_EXTRA_CLANG_ARGS="-I${pkgs.glibc.dev}/include $BINDGEN_EXTRA_CLANG_ARGS"
    export CPATH="${pkgs.python312}/include/python3.12:$CPATH"
    export NIX_LD_LIBRARY_PATH="${pkgs.python312}/lib:$NIX_LD_LIBRARY_PATH"

    if ! command -v rustup &>/dev/null; then
      echo "Installing rustup via official installer..."
      curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --no-modify-path
    fi

    if ! rustc --version &>/dev/null; then
      echo "Installing Rust nightly toolchain..."
      rustup install nightly
      rustup default nightly
    fi

    # === Analog Python Libraries ===
    pip install maturin pytest
    for pkg in analog/library/dep_library/gmid analog/library/dep_library/UWASIC-ALG; do
        if [ -d "$PROJECT_ROOT/$pkg" ]; then
            echo "Installing editable package: $pkg"
            python -m pip install -e "$PROJECT_ROOT/$pkg"
        fi
    done
  '';
}
