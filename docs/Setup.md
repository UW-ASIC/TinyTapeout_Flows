# Analog Design Workflow Setup Guide

This guide will help you set up an analog design environment using Nix on both Windows, Macos, and Linux systems. The workflow includes tools like **Xschem, Magic, ngspice, and Netgen** for complete analog circuit design.

## Table of Contents
- [Installing Nix](#installing-nix)
  - [Linux Installation](#linux-installation)
  - [macOS Installation](#macos-installation)
  - [Windows Installation](#windows-installation)
- [Project Setup](#project-setup)

## Installing Nix

### Linux Installation

#### Step 1: Install Nix Package Manager

Open a terminal and run the official Nix installer:

```bash
# Single-user installation (recommended for most users)
sh <(curl -L https://nixos.org/nix/install) --no-daemon

# OR multi-user installation (if you need system-wide access)
sh <(curl -L https://nixos.org/nix/install) --daemon
```

#### Step 2: Enable Experimental Features

After installation, you need to enable flakes support. Add this to your Nix configuration:

```bash
# Create the nix config directory
mkdir -p ~/.config/nix

# Enable flakes and nix-command features
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

#### Step 3: Restart Your Shell

```bash
# Source the new environment or restart your terminal
source ~/.profile
# OR
exec $SHELL
```

#### Step 4: Verify Installation

```bash
nix --version
```

You should see a version number (e.g., `nix (Nix) 2.18.1`).

### macOS Installation

#### Step 1: Install Nix Package Manager

macOS requires a few additional steps due to security restrictions:

```bash
# Install Nix using the Determinate Systems installer (recommended for macOS)
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install

# OR use the official installer (may require additional setup)
sh <(curl -L https://nixos.org/nix/install)
```

**Note**: The Determinate Systems installer is recommended for macOS as it handles the complexities of macOS security features automatically.

#### Step 2: Restart Your Terminal

After installation, completely close and reopen your terminal application.

#### Step 3: Enable Experimental Features

```bash
# Create the nix config directory
mkdir -p ~/.config/nix

# Enable flakes and nix-command features
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

#### Step 4: Install Xcode Command Line Tools (if not already installed)

The EDA tools require development tools to be present:

```bash
xcode-select --install
```

#### Step 5: Install XQuartz (for GUI applications)

Download and install XQuartz from [https://www.xquartz.org/](https://www.xquartz.org/) or use Homebrew:

```bash
# If you have Homebrew installed
brew install --cask xquartz
```

After installing XQuartz, log out and log back in to ensure it's properly configured.

#### Step 6: Verify Installation

```bash
nix --version
```

You should see a version number (e.g., `nix (Nix) 2.18.1`).

#### Step 1: Enable WSL2 (Windows Subsystem for Linux)

1. Open PowerShell as Administrator and run:
```powershell
wsl --install
```

2. Restart your computer when prompted.

3. After restart, open Microsoft Store and install "Ubuntu" (or your preferred Linux distribution).

4. Launch Ubuntu from the Start menu and complete the initial setup (create username/password).

#### Step 2: Install Nix in WSL2

Once inside your WSL2 Ubuntu environment:

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install curl if not present
sudo apt install curl -y

# Install Nix (single-user mode recommended for WSL2)
sh <(curl -L https://nixos.org/nix/install) --no-daemon
```

#### Step 3: Configure Nix for WSL2

```bash
# Enable experimental features
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf

# Source the nix environment
source ~/.profile
```

#### Step 4: Verify Installation

```bash
nix --version
```

## Project Setup

### Step 1: Download the Project Files

Create a new directory for your analog design project and navigate to it:

```bash
mkdir analog-design-project
cd analog-design-project
```

Place the provided files in this directory:
- `shell.nix` - Nix environment configuration
- `Makefile` - Build and workflow automation
- `.gitignore` - Git ignore patterns (if using version control)

### Step 2: Enter the Nix Shell Environment

```bash
nix-shell
```

The first time you run this, it will take several minutes to download and build all the required packages. You should see output like:

```
Creating analog design project structure...
Project structure created!
==========================================
Analog Design Environment Activated
==========================================
Project Root: /path/to/your/project
PDK Root: /home/user/.volare

Quick Start:
  make setup      - Complete project setup
  make tools      - Show available tools
  make help       - Show all commands
  make xschem     - Start schematic editor
  make magic      - Start layout editor
```

### Step 3: Complete Project Setup

Run the setup command to initialize your project:

```bash
make setup
```

This will:
- Create the necessary directory structure
- Set up basic PDK configuration
- Create tool launcher scripts
- Configure project settings

### Step 4: Verify Tool Availability

Check which tools are available:

```bash
make tools
```

You should see output indicating the status of each EDA tool.

## Troubleshooting

### Common Issues and Solutions

#### Issue: "nix: command not found"
**Solution**: The Nix environment wasn't properly sourced.
```bash
source ~/.profile
# OR restart your terminal
```

#### Issue: "experimental-features" error
**Solution**: Enable flakes support:
```bash
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

#### Issue: Tools won't start or display issues

**For WSL2 on Windows**:
1. Install an X server like VcXsrv or X410
2. Set the DISPLAY environment variable:
```bash
export DISPLAY=:0
```

**For macOS**:
1. Make sure XQuartz is installed and running
2. If tools still won't display, try:
```bash
export DISPLAY=:0
# OR
export DISPLAY=localhost:10.0
```
3. Restart XQuartz and try again

**For Linux**:
Most Linux distributions have X11 built-in, but if you're using Wayland:
```bash
# Install xwayland if needed
sudo apt install xwayland  # Ubuntu/Debian
sudo dnf install xorg-x11-server-Xwayland  # Fedora
```

#### Issue: Permission denied errors
**Solution**: Make sure the launcher scripts are executable:
```bash
chmod +x bin/run-*
```

#### Issue: PDK not found
**Solution**: Run the PDK installation:
```bash
make install-pdk
```

#### Issue: macOS security warnings
**Solution**: 
1. Go to System Preferences → Security & Privacy → General
2. Click "Allow" for any blocked applications
3. For persistent issues, you may need to disable SIP temporarily:
   - Restart holding Cmd+R, open Terminal
   - Run: `csrutil disable`
   - Restart normally, then re-enable with `csrutil enable`

#### Issue: "Darwin" or "macOS" specific build errors
**Solution**: Some packages may not have macOS support. Try:
```bash
# Force x86_64 emulation on Apple Silicon
nix-shell --system x86_64-darwin
```
**Solution**: 
- Store your project files in the WSL2 filesystem (not Windows filesystem)
- Use `\\wsl$\Ubuntu\home\username\` path in Windows File Explorer to access files

### Getting Help

1. **Check project status**: `make status`
2. **View all commands**: `make help`
3. **Clean up generated files**: `make clean`
4. **Check tool availability**: `make tools`

### Performance Tips

1. **First-time setup**: The initial `nix-shell` command will take time to download packages. Subsequent runs will be much faster.

2. **Disk space**: Nix stores packages in `/nix/store`. You can clean up old packages with:
```bash
nix-collect-garbage -d
```

3. **WSL2 performance**: Keep your project files in the WSL2 filesystem for better performance.

4. **macOS performance**: 
   - On Apple Silicon Macs, some x86_64 packages may run slower under Rosetta
   - Close unnecessary applications when running memory-intensive EDA tools
   - Consider increasing available memory for intensive layouts

5. **Linux performance**: Use your distribution's package manager for system dependencies when possible before falling back to Nix.

## Additional Resources

- [Xschem Documentation](http://repo.hu/projects/xschem/)
- [Magic Documentation](http://opencircuitdesign.com/magic/)
- [Ngspice Manual](http://ngspice.sourceforge.net/docs.html)
- [SkyWater PDK Documentation](https://skywater-pdk.readthedocs.io/)

---
