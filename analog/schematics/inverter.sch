v {xschem version=3.4.4 file_version=1.2
}
G {}
K {}
V {}
S {}
E {}
N -70 -590 -30 -590 {lab=Vin}
N -70 -700 -40 -700 {lab=Vin}
N -70 -700 -70 -590 {lab=Vin}
N -100 -640 -70 -640 {lab=Vin}
N 10 -670 10 -620 {lab=Vout}
N 10 -700 30 -700 {lab=VDD}
N 10 -740 30 -740 {lab=VDD}
N 30 -730 30 -700 {lab=VDD}
N 10 -760 10 -730 {lab=VDD}
N 30 -740 30 -730 {lab=VDD}
N 10 -590 30 -590 {lab=VSS}
N 30 -590 30 -550 {lab=VSS}
N 10 -560 10 -550 {lab=VSS}
N 10 -550 30 -550 {lab=VSS}
N 10 -550 10 -540 {lab=VSS}
N 10 -540 10 -530 {lab=VSS}
N 10 -640 60 -640 {lab=Vout}
N -40 -700 -30 -700 {
lab=Vin}
C {devices/opin.sym} 60 -640 0 0 {name=p1 lab=Vout}
C {devices/iopin.sym} 10 -760 3 0 {name=p2 lab=VDD}
C {devices/iopin.sym} 10 -530 1 0 {name=p3 lab=VSS}
C {devices/ipin.sym} -100 -640 0 0 {name=p4 lab=Vin}
C {sky130_fd_pr/pfet_g5v0d10v5.sym} -10 -700 0 0 {name=M2
L=0.5
W=1
nf=1
mult=1
ad="'int((nf+1)/2) * W/nf * 0.29'" 
pd="'2*int((nf+1)/2) * (W/nf + 0.29)'"
as="'int((nf+2)/2) * W/nf * 0.29'" 
ps="'2*int((nf+2)/2) * (W/nf + 0.29)'"
nrd="'0.29 / W'" nrs="'0.29 / W'"
sa=0 sb=0 sd=0
model=pfet_g5v0d10v5
spiceprefix=X
}
C {sky130_fd_pr/nfet_g5v0d10v5.sym} -10 -590 0 0 {name=M1
L=0.5
W=1
nf=1
mult=1
ad="'int((nf+1)/2) * W/nf * 0.29'" 
pd="'2*int((nf+1)/2) * (W/nf + 0.29)'"
as="'int((nf+2)/2) * W/nf * 0.29'" 
ps="'2*int((nf+2)/2) * (W/nf + 0.29)'"
nrd="'0.29 / W'" nrs="'0.29 / W'"
sa=0 sb=0 sd=0
model=nfet_g5v0d10v5
spiceprefix=X
}
