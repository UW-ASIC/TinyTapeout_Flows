export const metadata = {
  title: "Installation",
  order: 2
}

export const content = `
# Installation

## Linux

\`\`\`bash
# Install Nix
sh <(curl -L https://nixos.org/nix/install) --no-daemon

# Enable flakes
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf

# Restart shell
exec $SHELL

# Enter UWASIC environment
cd uwasic-template
nix-shell
\`\`\`

## macOS

\`\`\`bash
# Install Nix
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install

# Install XQuartz (for GUI tools)
brew install --cask xquartz

# Enter UWASIC environment
cd uwasic-template
nix-shell
\`\`\`

## Windows (WSL2)

\`\`\`powershell
# In PowerShell as Admin
wsl --install

# Restart, then in WSL2:
sh <(curl -L https://nixos.org/nix/install) --no-daemon
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf

# Enter UWASIC environment
cd uwasic-template
nix-shell
\`\`\`

## Tools You Get

- Digital: OpenLane2, Yosys, Icarus Verilog, cocotb
- Analog: Xschem, Magic, ngspice, netgen, KLayout
- Verification: CACHE, OpenSTA

Everything auto-installed. No manual setup.
`
