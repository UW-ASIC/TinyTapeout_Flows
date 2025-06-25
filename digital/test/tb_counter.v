`timescale 1ns / 1ps

module tb_counter;

  // Testbench signals
  reg        clk;
  reg        rst_n;
  reg        enable;
  wire [7:0] count;
  wire       overflow;

  // Clock generation
  initial begin
    clk = 0;
    forever #5 clk = ~clk;  // 100MHz clock (10ns period)
  end

  // DUT instantiation
  counter dut (
      .clk(clk),
      .rst_n(rst_n),
      .enable(enable),
      .count(count),
      .overflow(overflow)
  );

  // Test stimulus
  initial begin
    // Initialize signals
    rst_n  = 0;
    enable = 0;

    // Wait for a few clock cycles
    repeat (3) @(posedge clk);

    // Release reset
    rst_n = 1;
    @(posedge clk);

    // Test 1: Basic counting
    $display("=== Test 1: Basic Counting ===");
    enable = 1;
    repeat (10) begin
      @(posedge clk);
      $display("Time: %0t, Count: %d, Overflow: %b", $time, count, overflow);
    end

    // Test 2: Disable counting
    $display("\n=== Test 2: Disable Counting ===");
    enable = 0;
    repeat (5) begin
      @(posedge clk);
      $display("Time: %0t, Count: %d, Overflow: %b", $time, count, overflow);
    end

    // Test 3: Resume counting
    $display("\n=== Test 3: Resume Counting ===");
    enable = 1;
    repeat (5) begin
      @(posedge clk);
      $display("Time: %0t, Count: %d, Overflow: %b", $time, count, overflow);
    end

    // Test 4: Test overflow
    $display("\n=== Test 4: Test Overflow ===");
    // Set counter close to overflow
    @(posedge clk);
    force dut.count = 8'hFD;  // Force count to 253
    @(posedge clk);
    release dut.count;

    repeat (5) begin
      @(posedge clk);
      $display("Time: %0t, Count: %d (0x%02h), Overflow: %b", $time, count, count, overflow);
    end

    // Test 5: Reset during counting
    $display("\n=== Test 5: Reset During Counting ===");
    rst_n = 0;
    @(posedge clk);
    $display("Time: %0t, Count: %d, Overflow: %b (After Reset)", $time, count, overflow);

    rst_n = 1;
    @(posedge clk);
    $display("Time: %0t, Count: %d, Overflow: %b (After Reset Release)", $time, count, overflow);

    // Test 6: Overflow behavior
    $display("\n=== Test 6: Continuous Overflow Test ===");
    enable = 1;
    repeat (20) begin
      @(posedge clk);
      if (overflow) begin
        $display("Time: %0t, OVERFLOW! Count: %d", $time, count);
      end
    end

    $display("\n=== All Tests Completed ===");
    $finish;
  end

  // Monitor for unexpected behavior
  always @(posedge clk) begin
    if (rst_n) begin
      // Check that count doesn't exceed 8-bit range
      if (count > 255) begin
        $error("ERROR: Count exceeded 8-bit range: %d", count);
      end

      // Check overflow logic
      if (overflow && (count != 8'hFF || !enable)) begin
        $error("ERROR: Overflow asserted incorrectly. Count: %d, Enable: %b", count, enable);
      end

      if (!overflow && count == 8'hFF && enable) begin
        $error("ERROR: Overflow should be asserted. Count: %d, Enable: %b", count, enable);
      end
    end
  end

  // Optional: Generate VCD file for waveform viewing
  initial begin
    $dumpfile("counter_tb.vcd");
    $dumpvars(0, tb_counter);
  end

endmodule
