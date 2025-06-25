import cocotb
from cocotb.clock import Clock
from cocotb.triggers import RisingEdge, FallingEdge, Timer

@cocotb.test()
async def test_counter_basic(dut):
    """Test basic counter functionality"""
    
    # Start clock (10ns period)
    clock = Clock(dut.clk, 10, units="ns")
    cocotb.start_soon(clock.start())
    
    # Reset
    dut.rst.value = 1
    await RisingEdge(dut.clk)
    await RisingEdge(dut.clk)
    dut.rst.value = 0
    
    # Check reset state
    await RisingEdge(dut.clk)
    assert dut.count.value == 0, f"Expected 0, got {dut.count.value}"
    
    # Test counting
    for i in range(1, 16):  # Assuming 4-bit counter
        await RisingEdge(dut.clk)
        expected = i % 16  # Handle overflow
        assert dut.count.value == expected, f"Expected {expected}, got {dut.count.value}"
    
    dut._log.info("Counter test completed successfully!")

@cocotb.test()
async def test_counter_reset(dut):
    """Test reset functionality"""
    
    # Start clock
    clock = Clock(dut.clk, 10, units="ns")
    cocotb.start_soon(clock.start())
    
    # Let counter run for a bit
    dut.rst.value = 0
    for _ in range(5):
        await RisingEdge(dut.clk)
    
    # Apply reset
    dut.rst.value = 1
    await RisingEdge(dut.clk)
    dut.rst.value = 0
    await RisingEdge(dut.clk)
    
    # Check reset worked
    assert dut.count.value == 0, f"Reset failed: expected 0, got {dut.count.value}"
