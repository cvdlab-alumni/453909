//personal project CG
// villa chiericati








var domain1 = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([10,10]);
var domain3 = DOMAIN([[0,1],[0,2*PI]])([10,10]);




//funzione per il calcolo dei nodi a partire da un array di punti


function nodi (points) {
  var m = points.length;
  var k = 2;
  var n = (m + k + 1);
  var l = n - 3;
  var j = 1;
  var knots = [];
  for (var i = 0; i < 3; i++) {
    knots[i] = 0;
  };
  for (var i = 3; i < l; i++, j++) {
    knots[i] = j;
  };
  for (var i = l; i < n; i++) {
    knots[i] = j;
  };

  return knots;
};


//prato


var prato = SIMPLEX_GRID([[75],[80],[0.01]]);
prato = T([0,1,2])([-25,-30,-0.01])(prato);
prato = COLOR([0,0.545,0,1])(prato);

DRAW(prato);



//base 22.2x16.2 metri 


var base = SIMPLEX_GRID([
  [22.2],
  [16.2],
  [0.75]
  ]);



// fregio 22.2x16x0.48
var base1 = SIMPLEX_GRID([
  [-0.1, 22],
  [-0.1, 16],
  [-0.75, 0.48]
  ]);




  // base finestre 

  var base2 = SIMPLEX_GRID([
  [-0.15, 21.9],
  [-0.15, 15.9],
  [-1.23, 0.35]
  ]);




//lato finestre 
var base3 = SIMPLEX_GRID([
  [-0.15, 2.3, -0.7,15.9, -0.7, 2.3],
  [-0.15, 2.5, -0.7,2.5,-0.9,2.5,-0.9,2.5,-0.9,2.5, -0.7],
  [-1.58, 0.6]
  ]);



var base4 = SIMPLEX_GRID([
  [-0.15, 21.9],
  [-0.15, 15.9],
  [-2.18, 0.35]
  ]);




var base5 = SIMPLEX_GRID([
  [22.1],
  [16.2],
  [-2.53, 0.47]
  ]);


  var base6 = SIMPLEX_GRID([
  [-0.15, 2.3, -0.7,2.3,-0.7,-10.6, 2.3,-0.7, 2.3],
  [-0.15, 2.5, -0.7,2.5,-0.9,2.5,-0.9,2.5,-0.9,2.5, -0.7],
  [-3, 0.3]
  ]);


var base7 = SIMPLEX_GRID([
  [-2.5, 0.8, -15.7, 0.8],
  [1.1, -14, 1.1],
  [-3, 0.5]
  ]);




var base8 = SIMPLEX_GRID([
  [1.1, -20, 1.1],
  [-2.5, 0.8,-2.6, 0.8,-2.6, 0.8,-2.6, 0.8],
  [-3, 0.5]
  ]);





//dimensione finestre 0.7x2.5 m

var base9= SIMPLEX_GRID([
[-0.15, 2.3, -0.7,2.3,-0.7,-10.6, 2.3,-0.7, 2.3],
  [-0.15, 2.5, -0.7,2.5,-0.9,2.5,-0.9,2.5,-0.9,2.5, -0.7],
  [-3.3, 2.5]
  ]);



var base10 = SIMPLEX_GRID([
  [-0.15,9.45,-3,9.45],
  [-0.15,15.9],
   [-5.8,5.4]
  ]);


var base11 = SIMPLEX_GRID([
[-9.6,3,-9.45],
[-0.15,15.9],
[-8,3.2]
]);


//finestrelle alte


var base12 =  SIMPLEX_GRID([
  [-0.15, 2.3, -0.7,15.9, -0.7, 2.3],
  [-0.09, 2.5, -0.7,2.5,-1,2.5,-0.9,2.5,-1,2.5, -1],
  [-11.2, 0.6]
  ]);





  var base13 = SIMPLEX_GRID([
  [-0.10,22],
  [-0.10,16],
  [-11.8, 0.5]
  ]);






  var base14 = SIMPLEX_GRID([
  [-0.09,22],
  [-0.09,16],
  [-12.3, 0.2]
  ]);


// porta e finestre facciata e retro

var base15 =  SIMPLEX_GRID([
  [-4.8, 4.8, -3,4.9, -4.6],
  [-0.15, 0.2,-15.5,0.2],
  [-3, 1]
  ]);




var base16 =  SIMPLEX_GRID([
  [-5.45,1.45,-0.7,2, -3, 2, -0.7, 3],
  [-0.15, 0.2,-15.5,0.2],
  [-4, 1.8]
  ]);






var corpoEdificio = COLOR([254/255, 254/255, 233/255])(STRUCT([base, base1, base2, base3, base4, base5, base6, 
base7, base8, base9, base10, base11, base12, base13, base14, base15, base16]));
DRAW(corpoEdificio);



  



//TETTO
var controlpointsA = [[0.05, 0.2, 12.5],[5.93, 5.93, 16],[0,0,0],[0,0,0]]; 
var cA = CUBIC_HERMITE(S0)(controlpointsA); 
var curveA = MAP(cA)(domain1); 

var controlpointsB = [[22.2, 0.072, 12.5],[15.93, 5.93, 16],[0,0,0],[0,0,0]]; 
var cB = CUBIC_HERMITE(S0)(controlpointsB); 
var curveB = MAP(cB)(domain1); 

var controlpointsC = [[-0.05, 16.26, 12.5],[6, 12.2, 16],[0,0,0],[0,0,0]]; 
var cC = CUBIC_HERMITE(S0)(controlpointsC); 
var curveC = MAP(cC)(domain1); 

var controlpointsD = [[22.26, 16.26, 12.5],[16, 12.2, 16],[0,0,0],[0,0,0]]; 
var cD = CUBIC_HERMITE(S0)(controlpointsD); 
var curveD = MAP(cD)(domain1); 



var sAB = BEZIER(S1)([cA, cB])
var surfAB = MAP(sAB)(domain2);

var sCD = BEZIER(S1)([cC, cD])
var surfCD = MAP(sCD)(domain2);



var sBD = BEZIER(S1)([cB, cD])
var surfBD = MAP(sBD)(domain2);




var sAC = BEZIER(S1)([cA, cC])
var surfAC = MAP(sAC)(domain2);


var centroTetto =  SIMPLEX_GRID([
  [-5.9,10.2 ,-10.7],
  [-5.9, 6.3],
  [-15.95, 0.02]
  ]);





var tetto = COLOR([153/255, 51/255, 0])(STRUCT([surfAB, surfCD, surfBD, surfAC,centroTetto]));
DRAW(tetto);





//scale


var  scalino0 =  SIMPLEX_GRID([
  [-9, 4],
  [-17, 1.5],
  [-2.8, 0.25]
  ]);

var  scalino1 =  SIMPLEX_GRID([
  [-9, 4],
  [-18.25, 0.50],
  [-2.55, 0.25]
  ]);
var  scalino2 =  SIMPLEX_GRID([
  [-9, 4],
  [-18.50, 0.50],
  [-2.3, 0.25]
  ]);
var  scalino3 =  SIMPLEX_GRID([
  [-9, 4],
  [-18.75, 0.50],
  [-2.05, 0.25]
  ]);
var  scalino4 =  SIMPLEX_GRID([
  [-9, 4],
  [-19, 0.50],
  [-1.8, 0.25]
  ]);
var  scalino5 =  SIMPLEX_GRID([
  [-9, 4],
  [-19.25, 0.50],
  [-1.55, 0.25]
  ]);
var  scalino6 =  SIMPLEX_GRID([
  [-9, 4],
  [-19.50, 0.50],
  [-1.3, 0.25]
  ]);
var  scalino7 =  SIMPLEX_GRID([
  [-9, 4],
  [-19.75, 0.50],
  [-1.05, 0.25]
  ]);
var  scalino8 =  SIMPLEX_GRID([
  [-9, 4],
  [-20, 0.50],
  [-0.8, 0.25]
  ]);
var  scalino9 =  SIMPLEX_GRID([
  [-9, 4],
  [-20.25, 0.50],
  [-0.55, 0.25]
  ]);
var  scalino10 =  SIMPLEX_GRID([
  [-9, 4],
  [-20.50, 0.50],
  [-0.3, 0.25]
  ]);
var  scalino11 =  SIMPLEX_GRID([
  [-9, 4],
  [-20.75, 0.50],
  [-0.05, 0.30]
  ]);



var scale = COLOR([254/255, 254/255, 233/255])(STRUCT([scalino0, scalino1, scalino2, scalino3, scalino4, scalino5, scalino6, scalino7, scalino8, scalino9, scalino10, scalino11]));

DRAW(scale)



















