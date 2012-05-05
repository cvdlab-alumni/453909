//model of the fuselage of RAF SE5a

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);
var domain3 = DOMAIN([[0,1], [0,1], [0,1]]) ([15,15,15]);

var controls1 = [[0,-2,-2],[10,-1,-1]]; 
var c1 = BEZIER(S0)(controls1);
var curve1 = MAP(c1)(domain1);
//DRAW(curve1);

var controls2 = [[0,2,-2],[10,1,-1]];
var c2 = BEZIER(S0)(controls2);
var curve2 = MAP(c2)(domain1);
//DRAW(curve2);



// parte bassa
var controls21 =[[0,-2,-2],[10,-1,-1]];
var controls22 =[[0,-2,2],[10,-1,1]];
var c21 = BEZIER(S0)(controls21);
var c22 = BEZIER(S0)(controls22);
var surf1 = BEZIER(S1)([c21,c22]);
var lS = MAP(surf1)(domain2);

DRAW (lS)


//parte alta

var controls11 =[[0,2,2],[10,1,1]];
var controls12 =[[0,2,-2],[10,1,-1]];
var c11 = BEZIER(S0)(controls11);
var c12 = BEZIER(S0)(controls12);
var surf2 = BEZIER(S1)([c11,c12]);
var uS= MAP(surf2)(domain2);
DRAW(uS);


// lati

var surf3 = CUBIC_HERMITE(S1)([c1,c2,[0,0,-3],[0,0,3]]);
var sides = MAP(surf3)(domain2); 

var l= STRUCT([sides, R([1,2])([PI])(sides) ]);
DRAW(l);
