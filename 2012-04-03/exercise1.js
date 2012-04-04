


//bordo del piano terra


var boundary = [[0,0],[39,0],[39,4],[52,4],[52,6],[51,6],[51,16],[39,16],[39,17],[10,17],[10,22],[1,22],[1,2],[0,2],[0,0]];

var polylineB = POLYLINE (boundary)

DRAW (polylineB)


//piscina

var pool = [[1,1],[21,1],[21,10],[1,10],[1,1]];

var polylineP = POLYLINE (pool)


DRAW(polylineP)

//muri


//muro esterno


var wall1 = [[7.85,1],[7.85,0.85],[0.85,0.85],[0.85,22.15],[10.15,22.15],[10.15,17]];
 
 var polylineW1 = POLYLINE (wall1)



//muri interni 

 var wall2 = [[8.15,22],[8.15,21],[8,21],[8,22]];
  
  var polylineW2 = POLYLINE (wall2)





 var wall3 = [[10,20],[7.85,20],[7.85,19.85],[10,19.85]];
  
  var polylineW3 = POLYLINE (wall3)




 var wall4 = [[5.15,22],[5.15,20],[6.85,20],[6.85,19.85],[5.15,19.85],[5.15,19],[5,19],[5,22]];
  
  var polylineW4 = POLYLINE (wall4)




var wall5 = [[10,17.15],[5.15,17.15],[5.15,18],[5,18],[5,17],[10,17]];
  
  var polylineW5 = POLYLINE (wall5)





var wall6 = [[7.5,15],[24.5,15],[24.5,15.15],[7.5,15.15],[7.5,15]];
  
  var polylineW6 = POLYLINE (wall6)




var wall7 = [[8.25,14.5],[8.25,14.25],[22,14.25],[22,14.5],[8.25,14.5]];
  
  var polylineW7 = POLYLINE (wall7)




var wall8 = [[30,13.85],[30,14],[40,14],[40,13.85],[30,13.85]];
  
  var polylineW8 = POLYLINE (wall8)



var wall9 = [[31,13.85],[31,8.85],[31.15,8.85],[31.15,13.85]];
  
  var polylineW9 = POLYLINE (wall9)

 

 var wall10 = [[32,13.85],[32,8.85],[32.15,8.85],[32.15,13.85]];
  
  var polylineW10 = POLYLINE (wall10)




 var wall11 = [[24,8.85],[34,8.85],[34,8.7],[24,8.7],[24,8.85]];
  
  var polylineW11 = POLYLINE (wall11)

 


 var wall12 = [[37,11.85],[37,11.7],[42.5,11.7],[42.5,11.85],[37,11.85]];
  
  var polylineW12 = POLYLINE (wall12)





 var wall13 = [[47,16],[47,5]];
  
  var polylineW13 = POLYLINE (wall13)

 


 var wall14 = [[38,16],[38,16.15],[51.15,16.15],[51.15,4.85],[42,4.85],[42,5],[51,5],[51,16],[38,16]];
  
  var polylineW14 = POLYLINE (wall14)



 var wall15 = [[45,14.15],[44.85,14.15],[44.85,7.85],[45,7.85],[45,14.15]];
  
  var polylineW15 = POLYLINE (wall15)





var walls = STRUCT ([polylineW1,polylineW2,polylineW3,polylineW4,polylineW5,polylineW6,polylineW7,polylineW8,polylineW9,polylineW10,polylineW11,polylineW12,polylineW13,polylineW14,polylineW15]);

 

 //scale

 var scales = [[39,1],[38,1],[38,4],[39,4],[38.9,4],[38.9,1],[38.8,1],[38.8,4],[38.7,4],[38.7,1],[38.6,1],[38.6,4],[38.5,4],[38.5,1],[38.4,1],[38.4,4],[38.3,4],[38.3,1],[38.2,1],[38.2,4],[38.1,4],[38.1,1],[38,1],[38,4]];

  var polylineS = POLYLINE (scales)

 DRAW(polylineS)



 




 
//pilastri

var pillar1 = [[24,14.5],[24.25,14.5],[24.25,14.25],[24,14.25],[24,14.5]];
 
 var polylineP1 = POLYLINE(pillar1)
DRAW(polylineP1)


var pillar2 = [[33,14.5],[33.25,14.5],[33.25,14.25],[33,14.25],[33,14.5]];
 
 var polylineP2 = POLYLINE(pillar2)
DRAW(polylineP2)




var pillar3 = [[38,14.5],[38.25,14.5],[38.25,14.25],[38,14.25],[38,14.5]];
 var polylineP3 = POLYLINE(pillar3)
DRAW(polylineP3)



var pillar4 = [[46,14.5],[46.25,14.5],[46.25,14.25],[46,14.25],[46,14.5]];
 var polylineP4 = POLYLINE(pillar4)
DRAW(polylineP4)



var pillar5 = [[27,7.85],[27.25,7.85],[27.25,7.6],[27,7.6],[27,7.85]];
 var polylineP5 = POLYLINE(pillar5)
DRAW(polylineP5)


var pillar6 = [[33,7.85],[33.25,7.85],[33.25,7.6],[33,7.6],[33,7.85]];
 var polylineP6 = POLYLINE(pillar6)
DRAW(polylineP6)



var pillar7 = [[38,7.85],[38.25,7.85],[38.25,7.6],[38,7.6],[38,7.85]];
 var polylineP7 = POLYLINE(pillar7)
DRAW(polylineP7)



var pillar8 = [[46,7.85],[46.25,7.85],[46.25,7.6],[46,7.6],[46,7.85]];
 var polylineP8 = POLYLINE(pillar8)
DRAW(polylineP8)


var pillars = STRUCT ([[polylineP1,polylineP2,polylineP3,polylineP4,polylineP5,polylineP6,polylineP7,polylineP8]]);


 var map = STRUCT([walls,pillars]);
DRAW(COLOR([0,0,0])(map));
