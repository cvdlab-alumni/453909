//model of the fuselage of RAF SE5a

var domain1 = INTERVALS(1)(30);

var a = ([INTERVALS(1)(20)]);
var b = ([INTERVALS(1)(30)]);


var c0 = BEZIER(S0)([[1,0,0],[0.4,10,1]]);   
var c1 = BEZIER(S0)([[-1,0,0],[-0.2,10,0.5]]);
var c2 = BEZIER(S0)([[1,0,2],[0.2,10,2]]);
var c3 = BEZIER(S0)([[-1,0,2],[-0.2,10,2]]);
var c4 = BEZIER(S0)([[-1.5,0,1],[-0.2,10,1]]);
var c5 = BEZIER(S0)([[1.5,0,1],[0.2,10,1]]);
var c6 = BEZIER(S0)([[0.5,0,-0.5],[0,10,0.5]]);
var c7 = BEZIER(S0)([[-0.5,0,-0.5],[0,10,0.5]]);
var controls0 = [c0,c1,c2,c3,c4,c5,c6,c7];



var axb = PROD1x1([a,b]);
var surf0 = MAP(BEZIER(S1)(controls0))(axb));


DRAW(surf0)

var c8 = BEZIER(S0)([[-1,0,2],[-0.68,4,2]]);
var c9 = BEZIER(S0)([[-0.5,0,2.5],[-0.22,4,2.5]]);
var c10 = BEZIER(S0)([[0.5,0,2.5],[0.22,4,2.5]]);
var c11 = BEZIER(S0)([[1,0,2],[0.68,4,2]]);
var c12 = BEZIER(S0)([[-0.6,5,2],[-0.2,10,2]]);
var c13 = BEZIER(S0)([[-0.15,5,2.5],[-0.2,10,2]]);
var c14 = BEZIER(S0)([[0.15,5,2.5],[0.2,10,2]]);
var c15 = BEZIER(S0)([[0.6,5,2],[0.2,10,2]]);


