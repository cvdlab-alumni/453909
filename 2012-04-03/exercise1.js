


//Reproduce a 2D model of the floor plan of the Barcelona Pavilion. 
//using only the plasm.js primitives POLYLINE and STRUCT.

//Let assume the grid of squares on the floor be 1.0m x 1.0m.


//bordo del piano terra


var boundary = [[0,0],[39,0],[39,4],[52,4],[52,6],[51,6],[51,16],[39,16],[39,17],[10,17],[10,22],[1,22],[1,2],[0,2],[0,0]];

var polylineB = POLYLINE (boundary)

DRAW (polylineB)


//piscina

var pool = [[1,1],[21,1],[21,10],[1,10],[1,1]];

var polylineP = POLYLINE (pool)

DRAW(polylineP)


//muri

var wall1 = [[7.85,1],[7.85,0.85],[0.85,0.85],[0.85,22.15],[10.15,22.15],[10.15,17]];
 
 var polylineW1 = POLYLINE (wall1)

 DRAW(polylineW1)


 var wall2 = [[8.15,22],[8.15,21],[8,21],[8,22]];
  
  var polylineW2 = POLYLINE (wall2)

 DRAW(polylineW2)



 var wall3 = [[10,20],[7.85,20],[7.85,19.85],[10,19.85]];
  
  var polylineW3 = POLYLINE (wall3)

 DRAW(polylineW3)


 var wall4 = [[5.15,22],[5.15,20],[6.85,20],[6.85,19.85],[5.15,19.85],[5.15,19],[5,19],[5,22]];
  
  var polylineW4 = POLYLINE (wall4)

 DRAW(polylineW4)


var wall5 = [[10,17.15],[5.15,17.15],[5.15,18],[5,18],[5,17],[10,17]];
  
  var polylineW5 = POLYLINE (wall5)

 DRAW(polylineW5)



var wall6 = [[7.5,15],[24.5,15],[24.5,15.15],[7.5,15.15],[7.5,15]];
  
  var polylineW6 = POLYLINE (wall6)

 DRAW(polylineW6)


var wall7 = [[8.25,14.5],[8.25,14.25],[22,14.25],[22,14.5],[8.25,14.5]];
  
  var polylineW7 = POLYLINE (wall7)

 DRAW(polylineW7)


var wall8 = [[30,13.85],[30,14],[40,14],[40,13.85],[30,13.85]];
  
  var polylineW8 = POLYLINE (wall8)

 DRAW(polylineW8)


var wall9 = [[31,13.85],[31,8.85],[31.15,8.85],[31.15,13.85]];
  
  var polylineW9 = POLYLINE (wall9)

 DRAW(polylineW9)

 var wall10 = [[32,13.85],[32,8.85],[32.15,8.85],[32.15,13.85]];
  
  var polylineW10 = POLYLINE (wall10)

 DRAW(polylineW10)


 var wall11 = [[24,8.85],[34,8.85],[34,8.7],[24,8.7],[24,8.85]];
  
  var polylineW11 = POLYLINE (wall11)

 DRAW(polylineW11)


 var wall12 = [[37,11.85],[37,11.7],[42.5,11.7],[42.5,11.85],[37,11.85]];
  
  var polylineW12 = POLYLINE (wall12)

 DRAW(polylineW12)



 var wall13 = [[47,16],[47,5]];
  
  var polylineW13 = POLYLINE (wall13)

 DRAW(polylineW13)


 var wall14 = [[38,16],[38,16.15],[51.15,16.15],[51.15,4.85],[42,4.85],[42,5],[51,5],[51,16],[38,16]];
  
  var polylineW14 = POLYLINE (wall14)

 DRAW(polylineW14)


 var wall15 = [[45,14.15],[44.85,14.15],[44.85,7.85],[45,7.85],[45,14.15]];
  
  var polylineW15 = POLYLINE (wall15)

 DRAW(polylineW15)



 //scale

 var scales = [[39,1],[38,1],[38,4],[39,4],[38.9,4],[38.9,1],[38.8,1],[38.8,4],[38.7,4],[38.7,1],[38.6,1],[38.6,4],[38.5,4],[38.5,1],[38.4,1],[38.4,4],[38.3,4],[38.3,1],[38.2,1],[38.2,4],[38.1,4],[38.1,1],[38,1],[38,4]];

  var polylineS = POLYLINE (scales)

 DRAW(polylineS)



 var wall15 = POLYLINE [[45,14.15],[44.85,14.15],[44.85,7.85],[45,7.85],[45,14.15]];
  
 



var walls = STRUCT ([wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15])
 //scales

 var scales = [[39,1],[38,1],[38,4],[39,4],[38.9,4],[38.9,1],[38.8,1],[38.8,4],[38.7,4],[38.7,1],[38.6,1],[38.6,4],[38.5,4],[38.5,1],[38.4,1],[38.4,4],[38.3,4],[38.3,1],[38.2,1],[38.2,4],[38.1,4],[38.1,1],[38,1],[38,4]];

  var polylineS = POLYLINE (scales)

 


 var map = STRUCT([boundary,pool,scales]);
DRAW(COLOR([0,0,0])(map));[[7.85,1],[7.85,0.85],[0.85,0.85],[0.85,22.15],[10.15,22.15],[10.15,17]];
 
