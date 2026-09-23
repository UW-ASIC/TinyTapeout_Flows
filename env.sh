#!/usr/bin/env bash
set -e

OS="$(uname -s)"

# macOS
if [ "$OS" = "Darwin" ]; then
    echo "🍎 macOS detected. Running mac_shell.sh..."
    ./.flows/env/mac_shell.sh "$1"
# Linux/WSL
elif [ "$OS" = "Linux" ]; then
    echo "Linux/WSL detected. Running nix-shell..."
    if ! command -v nix-shell >/dev/null 2>&1; then
        echo "❄️  Nix not found. Installing Nix..."
        sh <(curl -L https://nixos.org/nix/install) --daemon
        echo "✅ Nix installed. Loading environment..."
        # Source Nix configuration directly to make it available immediately
        if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
            . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
        elif [ -e "$HOME/.nix-profile/etc/profile.d/nix.sh" ]; then
            . "$HOME/.nix-profile/etc/profile.d/nix.sh"
        fi
    fi

    # Binary cache for cktimg, spicerack and netgen. Without it these are a Zig build, a
    # Rust build and an LVS tool nixpkgs does not ship — all compiled locally.
    if ! command -v cachix >/dev/null 2>&1; then
        echo "🔹 Setting up Cachix..."
        nix-shell -p cachix --run "cachix use omarsiwy"
    else
        cachix use omarsiwy >/dev/null 2>&1 || true
    fi

    echo "🚀 Entering Nix shell..."

    # Pass the first argument as the 'type' to shell.nix
    # If no argument is provided, auto-detect based on project structure
    TYPE_ARG=""
    if [ -n "$1" ]; then
        TYPE_ARG="--argstr type $1"
    else
        # Auto-detection logic
        HAS_ANALOG=0
        HAS_DIGITAL=0

        if [ -d "analog" ]; then HAS_ANALOG=1; fi
        if [ -d "digital" ]; then HAS_DIGITAL=1; fi

        if [ "$HAS_ANALOG" -eq 1 ] && [ "$HAS_DIGITAL" -eq 1 ]; then
            echo "🔍 Auto-detected project type: mixed"
            TYPE_ARG="--argstr type mixed"
        elif [ "$HAS_ANALOG" -eq 1 ]; then
            echo "🔍 Auto-detected project type: analog"
            TYPE_ARG="--argstr type analog"
        elif [ "$HAS_DIGITAL" -eq 1 ]; then
            echo "🔍 Auto-detected project type: digital"
            TYPE_ARG="--argstr type digital"
        else
            echo "🔍 No project structure found. Defaulting to: mixed"
            TYPE_ARG="--argstr type mixed"
        fi
    fi

    nix-shell .flows/env/shell.nix $TYPE_ARG --extra-experimental-features flakes
else
    echo "❌ Unsupported OS: $OS"
    exit 1
fi
