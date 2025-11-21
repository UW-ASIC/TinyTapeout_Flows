#!/usr/bin/env bash
set -e

IMAGE_NAME="eda-env"
CONTAINER_NAME="eda-shell"

# --- Helper Function ---
install_with_brew() {
    local pkg="$1"
    if ! brew list --cask "$pkg" >/dev/null 2>&1 && ! brew list "$pkg" >/dev/null 2>&1; then
        echo "🔹 Installing $pkg via Homebrew..."
        brew install --cask "$pkg" || brew install "$pkg"
    else
        echo "✅ $pkg already installed."
    fi
}

# --- Fast Path: Check if Already Set Up ---
SETUP_COMPLETE=false
if command -v docker >/dev/null 2>&1 && \
   docker info >/dev/null 2>&1 && \
   [ -d "/Applications/Utilities/XQuartz.app" ] && \
   [[ "$(docker images -q $IMAGE_NAME 2>/dev/null)" != "" ]]; then
    SETUP_COMPLETE=true
fi

# --- Setup Phase (only if needed) ---
if [ "$SETUP_COMPLETE" = false ]; then
    echo "🔧 Running first-time setup..."

    # 1. Install Homebrew if Missing
    if ! command -v brew >/dev/null 2>&1; then
        echo "🍺 Homebrew not found. Installing Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

        # Add Homebrew to PATH for Apple Silicon Macs
        if [[ $(uname -m) == 'arm64' ]]; then
            echo "🔹 Configuring Homebrew for Apple Silicon..."
            echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
            eval "$(/opt/homebrew/bin/brew shellenv)"
        else
            # Intel Macs
            echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zprofile
            eval "$(/usr/local/bin/brew shellenv)"
        fi

        echo "✅ Homebrew installed successfully!"
    else
        echo "✅ Homebrew already installed."
    fi

    # 2. Install XQuartz if Missing
    if ! [ -d "/Applications/Utilities/XQuartz.app" ]; then
        install_with_brew "xquartz"
        echo "⚠️  XQuartz installed. Please log out and log back in, then run this script again."
        exit 0
    fi

    # 3. Ensure Docker is Installed
    if ! command -v docker >/dev/null 2>&1; then
        install_with_brew "docker"
        echo "⚠️  Docker installed. Please start Docker Desktop and run this script again."
        exit 0
    fi

    # 4. Ensure Docker Daemon is Running
    if ! docker info >/dev/null 2>&1; then
        echo "🔹 Starting Docker..."
        open -a Docker
        echo "⏳ Waiting for Docker to start..."
        for i in {1..30}; do
            if docker info >/dev/null 2>&1; then
                break
            fi
            sleep 2
            if [ $i -eq 30 ]; then
                echo "❌ Docker failed to start. Please start Docker Desktop manually."
                exit 1
            fi
        done
    fi

    # 5. Build Docker Image if Missing
    if [[ "$(docker images -q $IMAGE_NAME 2>/dev/null)" == "" ]]; then
        echo "🐳 Building Docker image '$IMAGE_NAME'..."
        docker build -t $IMAGE_NAME .
    fi

    echo "✅ Setup complete!"
fi

# Start XQuartz if not running
if ! pgrep -q XQuartz; then
    open -a XQuartz &
fi

# Get local IP for DISPLAY
IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}' 2>/dev/null)
[ -z "$IP" ] && IP=$(ifconfig | grep 'inet ' | grep -v '127.0.0.1' | awk 'NR==1{print $2}')

# Allow X11 connections
xhost +$IP >/dev/null 2>&1 || true

# Enter container
echo "🚀 Entering EDA environment..."
docker run -it --rm \
    -e DISPLAY=$IP:0 \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -v "$(pwd):/workspace" \
    -v "$HOME/.cache/nix:/root/.cache/nix" \
    -v "$HOME/.volare:/root/.volare" \
    --name $CONTAINER_NAME \
    $IMAGE_NAME nix-shell
