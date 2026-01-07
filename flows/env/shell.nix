{
  type ? "mixed",
  pkgs ?
    import (builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/56e9b39daca0f65e4d0f2cd06a41eb24e4d9f7ba.tar.gz";
      sha256 = "sha256:1mpjhkyf37gy2n19z4admzv5kwc5h57rf426svrahjf38pxc3big";
    }) {
      overlays = [
      ];
    },
}: let
  analog = import ./Analog.nix {inherit pkgs;};
  digital = import ./Digital.nix {inherit pkgs;};

  useAnalog = type == "analog" || type == "mixed";
  useDigital = type == "digital" || type == "mixed";

  commonPackages = with pkgs; [
    # Builds
    gnumake
    git
    python312
    ccache

    # C compilation dependencies
    gcc
    clang
    llvmPackages.libclang
    libffi.dev
    fftw

    # Python deps
    python312Packages.pip
    python312Packages.numpy
    python312Packages.setuptools
    python312Packages.wheel

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
    vim
  ];
in
  pkgs.mkShell {
    name = "eda-env";
    buildInputs =
      commonPackages
      ++ (
        if useAnalog
        then analog.packages
        else []
      )
      ++ (
        if useDigital
        then digital.packages
        else []
      );

    env = {
      NIX_ENFORCE_PURITY = "0";
    };

    shellHook = ''
      export PROJECT_ROOT="$(pwd)"

      # === Environment Variables Setup ===
      export CC="ccache gcc"
      export CXX="ccache g++"
      export CCACHE_DIR="$PROJECT_ROOT/.tools/ccache"

      # === PDK Configuration ===
      export PDK="sky130A"
      export PDK_VERSION="fa87f8f4bbcc7255b6f0c0fb506960f531ae2392"
      export PDK_ROOT="$HOME/.volare"

      # === Python Dependencies Installation ===
      export VENV_DIR="$PROJECT_ROOT/.venv"
      if [ -z "$VIRTUAL_ENV" ] || [ "$VIRTUAL_ENV" != "$VENV_DIR" ]; then
          if [ ! -d "$VENV_DIR" ]; then
              echo "Creating Python virtual environment..."
              python3 -m venv "$VENV_DIR"
          fi
          source "$VENV_DIR/bin/activate"
      fi
      pip install --upgrade pip==24.2 setuptools==75.1.0 wheel==0.44.0
      pip install --no-build-isolation -r "$PROJECT_ROOT/requirements.txt"

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

      # === Mode Specific Hooks ===
      ${
        if useAnalog
        then analog.shellHook
        else ""
      }
      ${
        if useDigital
        then digital.shellHook
        else ""
      }

      echo "=== EDA Environment ==="
      echo "Mode: ${type}"
      echo ""
      echo "System tools available:"
      echo "  - Python: $(python --version)"
      if [ "${type}" = "analog" ] || [ "${type}" = "mixed" ]; then
        echo "  - xschem: $(xschem --version 2>/dev/null || echo 'custom build')"
        echo "  - magic: $(magic --version 2>/dev/null || echo 'custom build ${pkgs.magic-vlsi.version}')"
      fi
      if [ "${type}" = "digital" ] || [ "${type}" = "mixed" ]; then
        echo "  - yosys: $(yosys -V 2>/dev/null | head -1 || echo 'unknown version')"
        echo "  - verilator: $(verilator --version 2>/dev/null | head -1 || echo 'unknown version')"
      fi
      echo "  - PDK: $PDK in $PDK_ROOT"
    '';
  }