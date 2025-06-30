v {xschem version=3.4.4 file_version=1.2
}
G {}
K {}
V {}
S {}
E {}
N 170 -20 210 -20 {
lab=VDD}
N 210 -30 210 -20 {
lab=VDD}
N 210 -110 210 -90 {
lab=GND}
N 180 20 180 60 {
lab=GND}
N 170 20 180 20 {
lab=GND}
N 170 -0 210 -0 {
lab=Vout}
N -180 -20 -130 -20 {
lab=Vin}
N -180 60 -180 80 {
lab=GND}
N -180 -20 -180 -0 {
lab=Vin}
C {inverter.sym} 20 0 0 0 {name=x1}
C {devices/vsource.sym} -180 30 0 0 {name=V1 value="pulse(0 1.8 1ns 1ns 1ns 5ns 10ns)" savecurrent=false}
C {devices/vsource.sym} 210 -60 2 0 {name=V2 value=2.5 savecurrent=false}
C {devices/gnd.sym} 180 60 0 0 {name=l1 lab=GND}
C {devices/gnd.sym} -180 80 0 0 {name=l2 lab=GND}
C {devices/gnd.sym} 210 -110 2 0 {name=l3 lab=GND}
C {devices/code_shown.sym} 200 130 0 0 {name=s1 only_toplevel=false value=".tran 0.01n 1u
.save all"}
C {devices/lab_pin.sym} 210 -20 2 0 {name=p1 sig_type=std_logic lab=VDD}
C {devices/lab_pin.sym} 210 0 2 0 {name=p2 sig_type=std_logic lab=Vout}
C {devices/lab_pin.sym} -180 -20 0 0 {name=p3 sig_type=std_logic lab=Vin}
C {sky130_fd_pr/corner.sym} 310 -120 0 0 {name=CORNER only_toplevel=false corner=tt}
