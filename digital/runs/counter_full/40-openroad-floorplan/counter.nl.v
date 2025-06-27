module counter (clk,
    enable,
    overflow,
    rst_n,
    count);
 input clk;
 input enable;
 output overflow;
 input rst_n;
 output [7:0] count;

 wire _00_;
 wire _01_;
 wire _02_;
 wire _03_;
 wire _04_;
 wire _05_;
 wire _06_;
 wire _07_;
 wire _08_;
 wire _09_;
 wire _10_;
 wire _11_;
 wire _12_;
 wire _13_;
 wire _14_;
 wire _15_;
 wire _16_;
 wire _17_;

 sky130_fd_sc_hd__and3_2 _18_ (.A(count[0]),
    .B(count[1]),
    .C(enable),
    .X(_08_));
 sky130_fd_sc_hd__and4_2 _19_ (.A(count[0]),
    .B(count[1]),
    .C(count[2]),
    .D(enable),
    .X(_09_));
 sky130_fd_sc_hd__nand2_2 _20_ (.A(count[3]),
    .B(_09_),
    .Y(_10_));
 sky130_fd_sc_hd__and2_2 _21_ (.A(count[5]),
    .B(count[4]),
    .X(_11_));
 sky130_fd_sc_hd__and3_2 _22_ (.A(count[3]),
    .B(_09_),
    .C(_11_),
    .X(_12_));
 sky130_fd_sc_hd__and4_2 _23_ (.A(count[3]),
    .B(count[6]),
    .C(_09_),
    .D(_11_),
    .X(_13_));
 sky130_fd_sc_hd__and2_2 _24_ (.A(count[7]),
    .B(_13_),
    .X(overflow));
 sky130_fd_sc_hd__xor2_2 _25_ (.A(count[0]),
    .B(enable),
    .X(_00_));
 sky130_fd_sc_hd__a21oi_2 _26_ (.A1(count[0]),
    .A2(enable),
    .B1(count[1]),
    .Y(_14_));
 sky130_fd_sc_hd__nor2_2 _27_ (.A(_08_),
    .B(_14_),
    .Y(_01_));
 sky130_fd_sc_hd__nor2_2 _28_ (.A(count[2]),
    .B(_08_),
    .Y(_15_));
 sky130_fd_sc_hd__nor2_2 _29_ (.A(_09_),
    .B(_15_),
    .Y(_02_));
 sky130_fd_sc_hd__or2_2 _30_ (.A(count[3]),
    .B(_09_),
    .X(_16_));
 sky130_fd_sc_hd__and2_2 _31_ (.A(_10_),
    .B(_16_),
    .X(_03_));
 sky130_fd_sc_hd__xnor2_2 _32_ (.A(count[4]),
    .B(_10_),
    .Y(_04_));
 sky130_fd_sc_hd__a31o_2 _33_ (.A1(count[3]),
    .A2(count[4]),
    .A3(_09_),
    .B1(count[5]),
    .X(_17_));
 sky130_fd_sc_hd__and2b_2 _34_ (.A_N(_12_),
    .B(_17_),
    .X(_05_));
 sky130_fd_sc_hd__xor2_2 _35_ (.A(count[6]),
    .B(_12_),
    .X(_06_));
 sky130_fd_sc_hd__xor2_2 _36_ (.A(count[7]),
    .B(_13_),
    .X(_07_));
 sky130_fd_sc_hd__dfrtp_2 _37_ (.CLK(clk),
    .D(_00_),
    .RESET_B(rst_n),
    .Q(count[0]));
 sky130_fd_sc_hd__dfrtp_2 _38_ (.CLK(clk),
    .D(_01_),
    .RESET_B(rst_n),
    .Q(count[1]));
 sky130_fd_sc_hd__dfrtp_2 _39_ (.CLK(clk),
    .D(_02_),
    .RESET_B(rst_n),
    .Q(count[2]));
 sky130_fd_sc_hd__dfrtp_2 _40_ (.CLK(clk),
    .D(_03_),
    .RESET_B(rst_n),
    .Q(count[3]));
 sky130_fd_sc_hd__dfrtp_2 _41_ (.CLK(clk),
    .D(_04_),
    .RESET_B(rst_n),
    .Q(count[4]));
 sky130_fd_sc_hd__dfrtp_2 _42_ (.CLK(clk),
    .D(_05_),
    .RESET_B(rst_n),
    .Q(count[5]));
 sky130_fd_sc_hd__dfrtp_2 _43_ (.CLK(clk),
    .D(_06_),
    .RESET_B(rst_n),
    .Q(count[6]));
 sky130_fd_sc_hd__dfrtp_2 _44_ (.CLK(clk),
    .D(_07_),
    .RESET_B(rst_n),
    .Q(count[7]));
endmodule
