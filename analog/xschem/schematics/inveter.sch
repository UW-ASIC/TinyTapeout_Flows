v {xschem version=3.4.6 file_version=1.2}
G {}
K {}
V {}
S {}
E {}
N -60 110 -20 110 {lab=xxx}
N -60 0 -20 0 {lab=xxx}
N -60 0 -60 110 {lab=xxx}
N -80 60 -70 60 {lab=xxx}
N -70 60 -60 60 {lab=xxx}
N 20 30 20 80 {lab=Vout}
N 20 -50 20 -30 {lab=VDD}
N 20 60 60 60 {lab=Vout}
C {xschem_library/devices/njfet.sym} 0 0 0 0 {name=J1 model=njfet area=1 m=1}
C {xschem_library/devices/njfet.sym} 0 110 0 0 {name=J2 model=njfet area=1 m=1}
C {xschem_library/devices/vdd.sym} 20 -30 0 0 {name=l1 lab=VDD}
C {xschem_library/devices/gnd.sym} 20 140 0 0 {name=l2 lab=GND}
C {xschem_library/devices/ipin.sym} -80 60 0 0 {name=p1 lab=Vin}
C {xschem_library/devices/opin.sym} 60 60 0 0 {name=p2 lab=Vout}
