## Digital Workflow

Each subdirectory is subproject that produces its own .gds files and it has this structure below:

proj/                   # Digital design domain
├── build/                 # Flow to lint, synthesize, test, and verify your proj
├── src/                   # RTL source files
└── test/                  # Digital testbenches & verification

### How to use
#### Project Setup
##### Adding another subdirectory

#### Makefile commands
##### lint
##### synthsize/create gds
##### test testbenches
##### verify

#### Linking to the analog flow

#### Digital -> ASIC flow

### Working on the flow itself

For the slang linter:
- https://github.com/MikePopoloski/slang

For the cocoatb configuration:
- https://github.com/cocotb/cocotb

For the openlane configuration, read: 
- Understanding the Analog Connection {https://openlane2.readthedocs.io/en/latest/usage/using_macros.html}
