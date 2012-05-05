
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,60]);

//Horizontal Stabilizers

var controls0 = [[0.02,0.02,0]];
var controls1 = [[1,0.02,0],[0.5,0.5,0],[-1.5,0.02,0],[0.5,-0.5,0],[1,0.02,0]];
var controls2 = [[1.5,0.02,0.1],[0.5,0.4,0.2],[-1.5,0.02,0.2],[0.5,-0.2,0.2],[1.5,0.02,0.2]];
var controls3 = [[1.5,0.02,1.5],[0.5,0.4,1.5],[-1.5,0.02,1.5],[0.5,-0.2,1.5],[1.5,0.02,1.5]];
var controls4 = [[1.1,0.02,1.5],[0.5,0.4,1.5],[-1.1,0.02,1.5],[0.5,-0.2,1.5],[1.1,0.02,1.5]];
var controls5 = [[0.5,0.04,1.5]];
var controls6 = [[1.5,0.02,0.75],[0.5,0.4,0.75],[-1.5,0.02,0.75],[0.5,-0.2,0.75],[1.5,0.02,0.75]];

var c0 = BEZIER(S0)(controls0);
var c1 = BEZIER(S0)(controls1);
var c2 = BEZIER(S0)(controls2);
var c3 = BEZIER(S0)(controls3);
var c4 = BEZIER(S0)(controls4);
var c5 = BEZIER(S0)(controls5);
var c6 = BEZIER(S0)(controls6);

var controls = [c0,c1,c2,c3,c4,c5];


var surf = BEZIER(S1)(controls);
var hS1 = T([0,1])([0.3,-0.3])(MAP(surf)(domain2));
var hS2 = S([2])([-1])(sO1);
var stabs = STRUCT([hS1,hS2]);

DRAW(COLOR([0,0,0.2])(stabs));




//Vertical Stabilizer

var controls6 = [[2,0,0],[1.6,-0.20,0],[-6,0,0],[1.4,0.20,0],[2,0,0]];
var controls7 = [[1.85,0,0.4],[1.5,-0.2,0.4],[-2.7,0,0.4],[1.5,0.2,0.4],[1.85,0,0.4]];
var controls8 = [[2,0,0.6],[2,-0.2,0.6],[-1.6,0,0.6],[1.5,0.2,0.6],[2,0,0.6]];
var controls9 = [[1.65,0,0.6],[1.175,-0.15,0.6],[-0.3,0,0.6],[1.175,0.15,0.6],[1.65,0,0.6]];
var controls10 = [[1.6,0,0.8],[1.25,-0.15,0.8],[0.2,0,0.8],[1.25,0.15,0.8],[1.6,0,0.8]];
var controls11 = [[1.55,0,1],[1.275,-0.15,1],[0.5,0,1],[1.275,0.15,1],[1.55,0,1]];
var controls12 = [[1.4,0,1.3],[1.25,-0.15,1.3],[0.7,0,1.3],[1.25,0.15,1.3],[1.4,0,1.3]];
var controls13 = [[0.2,0,0.2]];
var controls14 = [[1.75,0,0-0.1],[0.9,-0.15,-0.1],[-2,0,-0.1],[0.9,0.15,-0.1],[1.75,0,-0.1]];
var controls15 = [[1.4,0,0-0.2],[0.7,-0.15,-0.2],[-1.5,0,-0.2],[0.7,0.15,-0.2],[1.4,0,-0.2]];
var controls16 = [[0.4,0,-0.03]];

var c6 = BEZIER(S0)(controls6);
var c7 = BEZIER(S0)(controls7);
var c8 = BEZIER(S0)(controls8);
var c9 = BEZIER(S0)(controls9);
var c10 = BEZIER(S0)(controls10);
var c11 = BEZIER(S0)(controls11);
var c12 = BEZIER(S0)(controls12);
var c13 = BEZIER(S0)(controls13);
var c14 = BEZIER(S0)(controls14);
var c15 = BEZIER(S0)(controls15);
var c16 = BEZIER(S0)(controls16);

var controls1 = [c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16];


var surf1 = BEZIER(S1)(controls1);

var surf2 = BEZIER(S1)([c16,c15,c14,c6,c7,c8,c9,c10,c11,c12,c13]);
var vS = R([1,2])([PI/2])(MAP(surf2)(domain2));

DRAW(COLOR([0,0,0.2])(vS));







