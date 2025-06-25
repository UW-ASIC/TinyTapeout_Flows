module counter (
    input  wire       clk,
    input  wire       rst_n,
    input  wire       enable,
    output reg  [7:0] count,
    output wire       overflow
);

  always @(posedge clk or negedge rst_n) begin
    if (!rst_n) begin
      count <= 8'b0;
    end else if (enable) begin
      count <= count + 1'b1;
    end
  end

  assign overflow = (count == 8'hFF) && enable;

endmodule
