FROM nixos/nix:latest

# Enable experimental features for flakes support
RUN echo "experimental-features = nix-command flakes" >> /etc/nix/nix.conf

# Install basic utilities
RUN nix-env -iA nixpkgs.bash

# Set up working directory
WORKDIR /workspace

# Copy shell.nix and any requirements
COPY shell.nix /workspace/

ENV QT_X11_NO_MITSHM=1

# Pre-build the environment (this caches the build)
RUN nix-shell --run "echo 'Environment built successfully'"

CMD ["/bin/bash"]
