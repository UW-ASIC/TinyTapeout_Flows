{
  type ? "mixed",
  pkgs ?
    import (builtins.fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-25.11.tar.gz")
      { },
}:
let
  # Everything the template needs that nixpkgs does not carry, prebuilt and cached:
  # cktimg and spicerack (built there because nothing else caches them) plus VLSI netgen
  # (re-exported from nix-eda — `pkgs.netgen` is an unrelated 3D mesh generator).
  # Run `cachix use omarsiwy` first, or these compile locally.
  eda = builtins.getFlake "github:OmarSiwy/EDA-Packaged";
  analog = import ./Analog.nix { inherit pkgs eda; };
  digital = import ./Digital.nix { inherit pkgs; };

  useAnalog = type == "analog" || type == "mixed";
  useDigital = type == "digital" || type == "mixed";

  commonPackages = with pkgs; [
    # Builds
    gnumake
    git
    gh
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

    # Viewing docs locally
    bun
  ];

in
pkgs.mkShell {
  name = "eda-env";

  buildInputs =
    commonPackages
    ++ (if useAnalog then analog.packages else [ ])
    ++ (if useDigital then digital.packages else [ ]);

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

    # === PDK SETUP WITH VOLARE ===
    pip install --upgrade pip==24.2 setuptools==75.1.0 wheel==0.44.0 >/dev/null 2>&1
    pip install volare==0.20.6  >/dev/null 2>&1 || true

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
    ${if useAnalog then analog.shellHook else ""}
    ${if useDigital then digital.shellHook else ""}

    echo "=== EDA Environment ==="
    echo "Mode: ${type}"
    echo ""
    echo "System tools available:"
    echo "  - Python: $(python --version)"

    if [ "${type}" = "analog" ] || [ "${type}" = "mixed" ]; then
      echo "  - xschem: $(xschem --version 2>/dev/null | head -n 1 || echo 'custom build')"
      echo "  - magic: $(magic --version 2>/dev/null || echo 'from nixpkgs')"
      echo "  - cktimg-json: $(command -v cktimg-json >/dev/null && echo ok || echo 'not found')"
      echo "  - spicerack: $(python -c 'import spicerack' 2>/dev/null && echo ok || echo 'not found')"
    fi

    if [ "${type}" = "digital" ] || [ "${type}" = "mixed" ]; then
      echo "  - yosys: $(yosys -V 2>/dev/null | head -1 || echo 'not found')"
      echo "  - verilator: $(verilator --version 2>/dev/null | head -1 || echo 'not found')"
      echo "  - openroad: $(openroad -version 2>/dev/null | head -1 || echo 'not found')"
      echo "  - openlane: $(openlane --version 2>/dev/null || echo 'not found')"
    fi

    echo "  - PDK: $PDK in $PDK_ROOT"
    echo ""
  '';
}
