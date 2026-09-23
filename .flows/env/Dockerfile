FROM nixos/nix:latest

# Enable flakes
RUN echo "experimental-features = nix-command flakes" >> /etc/nix/nix.conf

# 🔴 Disable sandbox (required for macOS + QEMU)
ENV NIX_CONFIG="sandbox = false"
ENV NIX_CONFIG="filter-syscalls = false"

# Install basic utilities
RUN nix-env -iA nixpkgs.bash nixpkgs.cachix

# Binary cache for cktimg, spicerack and netgen — without it the image build compiles them.
RUN cachix use omarsiwy

WORKDIR /workspace
COPY shell.nix Analog.nix Digital.nix /workspace/

ENV QT_X11_NO_MITSHM=1

RUN nix-shell --run "echo 'Environment built successfully'"

CMD ["/bin/bash"]
