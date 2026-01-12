#!/usr/bin/env bash
set -e

IMAGE_NAME="eda-env"
CONTAINER_NAME="eda-shell"

# --- Type Argument Handling (analog/digital/mixed) ---
TYPE_ARG=""
if [ -n "$1" ]; then
    TYPE_ARG="--argstr type $1"
    echo "📦 Using environment type: $1"
else
    # Auto-detection logic (same as mac_shell.sh)
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

# --- Fast Path: Check if Already Set Up ---
SETUP_COMPLETE=false
if command -v docker >/dev/null 2>&1 && \
   docker info >/dev/null 2>&1 && \
   [[ "$(docker images -q $IMAGE_NAME 2>/dev/null)" != "" ]]; then
    SETUP_COMPLETE=true
fi

# --- Setup Phase (only if needed) ---
if [ "$SETUP_COMPLETE" = false ]; then
    echo "🔧 Running first-time setup..."

    # 1. Ensure Docker is Installed
    if ! command -v docker >/dev/null 2>&1; then
        echo "❌ Docker is not installed. Please install Docker first:"
        echo "   https://docs.docker.com/engine/install/"
        exit 1
    fi

    # 2. Ensure Docker Daemon is Running
    if ! docker info >/dev/null 2>&1; then
        echo "❌ Docker daemon is not running. Please start Docker first."
        exit 1
    fi

    # 3. Build Docker Image if Missing
    if [[ "$(docker images -q $IMAGE_NAME 2>/dev/null)" == "" ]]; then
        echo "🐳 Building Docker image '$IMAGE_NAME'..."
        SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
        docker build -t $IMAGE_NAME "$SCRIPT_DIR"
    fi

    echo "✅ Setup complete!"
fi

# Enter container
echo "🚀 Entering EDA environment (Docker)..."
docker run -it --rm \
    -e DISPLAY="${DISPLAY:-:0}" \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -v "$(pwd):/workspace" \
    -v "$HOME/.volare:/root/.volare" \
    --name $CONTAINER_NAME \
    $IMAGE_NAME nix-shell /nix-env/shell.nix $TYPE_ARG --extra-experimental-features flakes
