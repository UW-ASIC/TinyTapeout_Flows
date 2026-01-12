FROM nixos/nix:latest

# Enable experimental features for flakes support
RUN echo "experimental-features = nix-command flakes" >> /etc/nix/nix.conf

# Install basic utilities
RUN nix-env -iA nixpkgs.bash nixpkgs.cachix

# Configure Cachix
RUN cachix use uwasic-eda

# Set up working directory
WORKDIR /workspace

# Copy shell.nix and its dependencies to a persistent location
# (not /workspace, which gets overwritten by volume mount at runtime)
COPY shell.nix Analog.nix Digital.nix /nix-env/

ENV QT_X11_NO_MITSHM=1

# Pre-build the environment (this caches the build)
# Note: --extra-experimental-features flakes is required because shell.nix uses builtins.getFlake
RUN nix-shell /nix-env/shell.nix --extra-experimental-features flakes --run "echo 'Environment built successfully'"

CMD ["/bin/bash"]