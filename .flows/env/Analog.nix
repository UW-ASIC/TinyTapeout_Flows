{
  pkgs,
  eda,
}:
let
  edaPkgs = eda.packages.${pkgs.system};
  cktimgPkg = edaPkgs.cktimg;
  spicerackPkg = edaPkgs.spicerack;
  # The shared-library build of ngspice. The Rust analog crates link against it, which
  # plain `ngspice` (a binary only) cannot satisfy.
  ngspiceShared = pkgs.libngspice;
in
{
  packages = [
    # EDA tools, straight from nixpkgs.
    pkgs.xschem
    pkgs.klayout
    # The VLSI LVS tool. NOT `pkgs.netgen`, which is a 3D tetrahedral mesh generator from
    # ngsolve.org that shares nothing with this but a name — nixpkgs has no VLSI netgen
    # under any attribute, which is why it comes through the EDA-Packaged pin.
    edaPkgs.netgen
    ngspiceShared
    pkgs.ngspice
    pkgs.magic-vlsi

    # Netlist-first flow. cktimgPkg ships `cktimg-json`, which .flows/tools/
    # cktimg_to_xschem.py shells out to; spicerackPkg is a Python package and is reached
    # through PYTHONPATH below rather than by landing a binary on PATH.
    cktimgPkg
    spicerackPkg

    # Rust toolchain from nixpkgs
    pkgs.cargo
    pkgs.rustc
    pkgs.rust-analyzer
    pkgs.rustfmt
    pkgs.clippy
  ];
  shellHook = ''
    # === Analog Tools Configuration ===
    export BINDGEN_EXTRA_CLANG_ARGS="-I${ngspiceShared}/include $BINDGEN_EXTRA_CLANG_ARGS"
    export CPATH="${ngspiceShared}/include:$CPATH"
    export NIX_LD_LIBRARY_PATH="${ngspiceShared}/lib:$NIX_LD_LIBRARY_PATH"
    export PKG_CONFIG_PATH="${ngspiceShared}/lib/pkgconfig:$PKG_CONFIG_PATH"
    export KLAYOUT_PATH="$PDK_ROOT/$PDK/libs.tech/klayout"
    export XSCHEM_USER_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem"
    export XSCHEM_LIBRARY_PATH="$PDK_ROOT/$PDK/libs.tech/xschem:${pkgs.xschem}/share/xschem/xschem_library"

    # === Rust Build Config ===
    export LIBCLANG_PATH="${pkgs.llvmPackages.libclang.lib}/lib"
    export BINDGEN_EXTRA_CLANG_ARGS="-I${pkgs.glibc.dev}/include $BINDGEN_EXTRA_CLANG_ARGS"
    export CPATH="${pkgs.python312}/include/python3.12:$CPATH"
    export NIX_LD_LIBRARY_PATH="${pkgs.python312}/lib:$NIX_LD_LIBRARY_PATH"

    # === Analog Python Libraries ===
    # spicerack is a nix-built Python package, and the venv shell.nix creates does not
    # inherit system site-packages, so PYTHONPATH is what makes `import spicerack`
    # resolve inside it. Prepended, not appended: the venv must not shadow it with a
    # half-built copy from a previous `maturin develop`.
    export PYTHONPATH="${spicerackPkg}/${pkgs.python312.sitePackages}:$PYTHONPATH"

    pip install maturin pytest
    for pkg in analog/library/dep_library/gmid analog/library/dep_library/UWASIC-ALG; do
        if [ -d "$PROJECT_ROOT/$pkg" ]; then
            echo "Installing editable package: $pkg"
            python -m pip install -e "$PROJECT_ROOT/$pkg"
        fi
    done
  '';
}
