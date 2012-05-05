// model of  wings of RAF SE5a




var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0, 1], [0, 1]])([15, 70]);




var p0 = [[1,0, 0],[0,0, -0.3],[-1, 0, 0],[-1, 0, 0],[-1, 0, 0],[0,0, 0.3], [1,0,0]];

var p1 = p0.map(function(p){return[p[0], p[1]+0.5, p[2]]});
var p2 = p0.map(function(p){return[p[0], p[1]+1.5, p[2]]});
var p3 = p0.map(function(p){return[p[0], p[1]+2.5, p[2]]});
var p4 = p0.map(function(p){return[p[0], p[1]+3.2, p[2]]});



var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var controls1= [c0,c1,c2,c3,c4];

var domain2 = DOMAIN([[0, 1], [0, 1]])([15, 70]); 
var surf1 = BEZIER(S1)(controls1);
var wingDx = MAP(surf1)(domain2);
// DRAW(wingDx)
//ala in basso a destra

var p5 = p0.map(function(p){return[p[0], p[1]-0.5, p[2]]});
var p6 = p0.map(function(p){return[p[0], p[1]-1.5, p[2]]});
var p7 = p0.map(function(p){return[p[0], p[1]-2.5, p[2]]});
var p8 = p0.map(function(p){return[p[0], p[1]-3, p[2]]});
var p9 = p0.map(function(p){return[p[0], p[1]-4.2, p[2]]});



var c6 = BEZIER(S0)(p5);
var c7 = BEZIER(S0)(p6);
var c8 = BEZIER(S0)(p7);
var c9 = BEZIER(S0)(p8);
var c10 = BEZIER(S0)(p9);
var controls2= [c6,c7,c8,c9,c10];


var surf2 = BEZIER(S1)(controls2);
var wingSx = MAP(surf2)(domain2);

// DRAW(wingSx)
// ala in basso a sinistra



// ala superiore unica

var wingUdx=T([2])([1])(wingDx);
var p5 = p0.map(function(p){return[p[0], p[1]-0.5, p[2]]});
var p6 = p0.map(function(p){return[p[0], p[1]-1.5, p[2]]});
var p7 = p0.map(function(p){return[p[0], p[1]-2.5, p[2]]});
var p8 = p0.map(function(p){return[p[0], p[1]-3, p[2]]});
var p9= p0.map(function(p){return[p[0], p[1]-4.2, p[2]]});


var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);
var c8 = BEZIER(S0)(p8);
var c9 = BEZIER(S0)(p9);



var surf2 = BEZIER(S1)([c0, c5,c6, c7, c8, c9, c10]);
var wingUsx =T([2])([1])(MAP(surf2)(domain2));
var wings = STRUCT([wingUsx, wingDx, wingUdx, wingSx]);



DRAW(COLOR([0,0,0.2])(wings));


