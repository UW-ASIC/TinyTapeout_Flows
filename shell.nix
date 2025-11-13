{
  pkgs ?
    import (builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/nixos-unstable.tar.gz";
      sha256 = "sha256:04h7cq8rp8815xb4zglkah4w6p2r5lqp7xanv89yxzbmnv29np2a";
    }) {
      overlays = [
      ];
    },
}: let
  selfBuiltPackages = {
    # zimpl_fixed = pkgs.zimpl.overrideAttrs (oldAttrs: {
    #   doCheck = !pkgs.stdenv.hostPlatform.isDarwin;
    # });

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

    xschem_with_mac_support = pkgs.stdenv.mkDerivation rec {
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
        cairo
        xorg.libX11
        xorg.libXpm
        tcl
        tk
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
  pkgs.mkShell {
    name = "eda-environment-v1.0";
    buildInputs = with pkgs; [
      # Builds
      rustup
      cargo
      gnumake
      git
      ccache
      pkg-config

      # C compilation dependencies
      gcc
      clang
      llvmPackages.libclang
      libffi.dev

      # Digital design
      slang
      verilator
      yosys
      gtkwave
      python312
      python312Packages.pip
      python312Packages.numpy
      python312Packages.setuptools
      python312Packages.wheel

      # OpenRoad + dep
      # openroad
      ruby
      stdenv.cc.cc.lib
      expat
      zlib

      # Analog Design
      selfBuiltPackages.xschem_with_mac_support
      selfBuiltPackages.ngspice-shared
      ngspice
      selfBuiltPackages.netgen
      klayout
      magic-vlsi
      vim

      # Graphics/GUI support
      xorg.libX11
      xorg.libXpm
      xorg.libXt
      cairo
      xterm
      xorg.fontutil
      xorg.fontmiscmisc
      xorg.fontcursormisc
      dejavu_fonts
      liberation_ttf
      inkscape
    ];

    env = {
      NIX_ENFORCE_PURITY = "0";

      LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
        pkgs.stdenv.cc.cc.lib
        pkgs.python312
        selfBuiltPackages.ngspice-shared
        pkgs.zlib
      ];
    };

    shellHook = ''
      export PROJECT_ROOT="$(pwd)"

      # === Environment Variables Setup ===
      # Rust
      export RUSTUP_HOME="$HOME/.rustup"
      export CARGO_HOME="$HOME/.cargo"
      export PATH="$CARGO_HOME/bin:$PATH"

      # C/C++
      export CC="ccache gcc"
      export CXX="ccache g++"
      export CPATH="${pkgs.python312}/include/python3.12"
      export LIBCLANG_PATH="${pkgs.llvmPackages.libclang.lib}/lib/libclang.so"
      export PKG_CONFIG_PATH="${selfBuiltPackages.ngspice-shared}/lib/pkgconfig"
      export CCACHE_DIR="$PROJECT_ROOT/.tools/ccache"

      # Python
      export VENV_DIR="$PROJECT_ROOT/.venv"

      # === PDK Configuration ===
      export PDK="sky130A"
      export PDK_VERSION="fa87f8f4bbcc7255b6f0c0fb506960f531ae2392"
      export PDK_ROOT="$HOME/.volare"

      # === EDA Tools Configuration ===
      export KLAYOUT_PATH="$PDK_ROOT/$PDK/libs.tech/klayout"
      export XSCHEM_USER_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem"
      export XSCHEM_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem:${selfBuiltPackages.xschem_with_mac_support}/share/xschem/xschem_library"

      # === Rust Toolchain Setup ===
      if ! rustc --version &>/dev/null; then
        echo "Installing Rust nightly toolchain..."
        rustup install nightly
        rustup default nightly
      fi

      # === PYTHON VENV SETUP ===
      VENV_VALID=false
      if [ -x "$VENV_DIR/bin/python3" ]; then
          VENV_VALID=true
      fi
      if [ "$VENV_VALID" = false ]; then
          if [ -d "$VENV_DIR" ]; then
              echo "Existing venv is invalid/broken, removing..."
              rm -rf "$VENV_DIR"
          fi
          echo "Creating Python virtual environment..."
          python3 -m venv "$VENV_DIR"
      fi

      # === Python Dependencies Installation ===
      if [ -z "$VIRTUAL_ENV" ] || [ "$VIRTUAL_ENV" != "$VENV_DIR" ]; then
          echo "Activating virtual environment..."
          source "$VENV_DIR/bin/activate"
      fi
      if [ -n "$VIRTUAL_ENV" ]; then
          echo "Installing Python packages from requirements.txt..."
          python -m pip install --upgrade pip setuptools wheel maturin cace
          python -m pip install --no-build-isolation -r "$PROJECT_ROOT/requirements.txt"

          for pkg in analog/library/dep_library/gmid analog/library/dep_library/UWASIC-ALG; do
              if [ -d "$PROJECT_ROOT/$pkg" ]; then
                  echo "Installing editable package: $pkg"
                  python -m pip install -e "$PROJECT_ROOT/$pkg"
              fi
          done
      fi

      # === PDK SETUP WITH VOLARE ===
      if [ -d "$PDK_ROOT/volare/sky130/versions" ]; then
          echo "Cleaning up old PDK versions (keeping $PDK_VERSION)..."
          cd "$PDK_ROOT/volare/sky130/versions"
          find . -maxdepth 1 -mindepth 1 -type d ! -name "$PDK_VERSION" -exec echo "  Removing old version: {}" \; -exec rm -rf {} \;
          if [ ! -d "$PDK_ROOT/$PDK" ]; then
             echo "  Removing potentially invalid cache link: ~/.volare"
             rm -rf "$HOME/.volare"
          fi
          cd "$PROJECT_ROOT"
      fi
      # Enable the PDK with volare
      volare enable --pdk sky130 "$PDK_VERSION"

      echo "=== EDA Environment v1.0 ==="
      echo ""
      echo "System tools available:"
      echo "  - Python: $(python --version)"
      echo "  - xschem: $(xschem --version 2>/dev/null || echo 'custom build')"
      echo "  - yosys: $(yosys -V 2>/dev/null | head -1 || echo 'unknown version')"
      echo "  - verilator: $(verilator --version 2>/dev/null | head -1 || echo 'unknown version')"
      echo "  - magic: $(magic --version 2>/dev/null || echo 'custom build ${pkgs.magic-vlsi.version}')"
      echo "  - PDK: $PDK in $PDK_ROOT"
    '';
  }
