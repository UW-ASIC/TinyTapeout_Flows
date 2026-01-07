{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    bun
  ];

  shellHook = ''
    echo "🚀 UWASIC Documentation Environment"
    echo "=================================="
    echo ""
    echo "Available commands:"
    echo "  bun install    - Install dependencies"
    echo "  bun run dev    - Start development server"
    echo "  bun run build  - Build for production"
    echo ""

    # Auto-install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
      echo "📦 Installing dependencies..."
      bun install
      echo ""
    fi
  '';
}
