export const metadata = {
  title: "Create Project",
  order: 2
}

export const content = `
# Create Digital Project

## Step 1: Create Project

\`\`\`bash
cd flows/
make CreateProject PROJECT_NAME=my_counter PROJECT_TYPE=digital
\`\`\`

## Step 2: Write Verilog

Edit \`digital/my_counter/src/my_counter.v\`:

\`\`\`verilog
module my_counter (
    input wire clk,
    input wire rst_n,
    input wire [7:0] ui_in,
    output reg [7:0] uo_out,
    input wire [7:0] uio_in,
    output reg [7:0] uio_out,
    output reg [7:0] uio_oe
);

    reg [7:0] counter;

    always @(posedge clk or negedge rst_n) begin
        if (!rst_n)
            counter <= 8'b0;
        else
            counter <= counter + 1;
    end

    assign uo_out = counter;
    assign uio_out = 8'b0;
    assign uio_oe = 8'b0;

endmodule
\`\`\`

## Step 3: Test It

Create \`digital/my_counter/test/test_counter.py\`:

\`\`\`python
import cocotb
from cocotb.clock import Clock
from cocotb.triggers import RisingEdge

@cocotb.test()
async def test_counter(dut):
    clock = Clock(dut.clk, 10, units="ns")
    cocotb.start_soon(clock.start())

    dut.rst_n.value = 0
    await RisingEdge(dut.clk)
    dut.rst_n.value = 1

    for i in range(10):
        await RisingEdge(dut.clk)
        assert dut.uo_out.value == i
\`\`\`

Run test:
\`\`\`bash
cd digital/my_counter/build/des_tb
make test-rtl
\`\`\`

## Step 4: Done!

Your digital design is ready. Next: see TinyTapeout Integration.
`
