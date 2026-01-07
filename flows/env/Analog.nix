{ pkgs, uwasic-eda }:
let
  edaPackages = uwasic-eda.packages.${pkgs.system};
in
{
  packages = [
    # Use cached packages from uwasic-eda flake
    edaPackages.xschem
    edaPackages.netgen
    edaPackages.klayout
    edaPackages.ngspice-shared
    # Standard packages from nixpkgs
    pkgs.ngspice
    pkgs.magic-vlsi

    # Rust toolchain from nixpkgs
    pkgs.cargo
    pkgs.rustc
    pkgs.rust-analyzer
    pkgs.rustfmt
    pkgs.clippy
  ];
  shellHook = ''
    # === Analog Tools Configuration ===
    export BINDGEN_EXTRA_CLANG_ARGS="-I${edaPackages.ngspice-shared}/include $BINDGEN_EXTRA_CLANG_ARGS"
    export CPATH="${edaPackages.ngspice-shared}/include:$CPATH"
    export NIX_LD_LIBRARY_PATH="${edaPackages.ngspice-shared}/lib:$NIX_LD_LIBRARY_PATH"
    export PKG_CONFIG_PATH="${edaPackages.ngspice-shared}/lib/pkgconfig:$PKG_CONFIG_PATH"
    export KLAYOUT_PATH="$PDK_ROOT/$PDK/libs.tech/klayout"
    export XSCHEM_USER_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem"
    export XSCHEM_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem:${edaPackages.xschem}/share/xschem/xschem_library"

    # === Rust Build Config ===
    export LIBCLANG_PATH="${pkgs.llvmPackages.libclang.lib}/lib"
    export BINDGEN_EXTRA_CLANG_ARGS="-I${pkgs.glibc.dev}/include $BINDGEN_EXTRA_CLANG_ARGS"
    export CPATH="${pkgs.python312}/include/python3.12:$CPATH"
    export NIX_LD_LIBRARY_PATH="${pkgs.python312}/lib:$NIX_LD_LIBRARY_PATH"

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
