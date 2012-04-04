



// piano



var f1 = SIMPLEX_GRID ([[-1,39],[1],[1]]);


var f2 = SIMPLEX_GRID ([[1],[2],[1]]);


var f3 = SIMPLEX_GRID ([[-14,26],[-1,4],[1]]);


var f4 = SIMPLEX_GRID ([[-14,39],[-4,2],[1]]);


var f5 = SIMPLEX_GRID ([[-14,38],[-4,15],[1]]);



var f6 = SIMPLEX_GRID ([[-14,39],[-4,2],[1]]);


var f7 = SIMPLEX_GRID ([[-1,46],[-10,13],[1]]);


var f8 = SIMPLEX_GRID ([[-1,8],[-17,9],[1]]);


var f9 = SIMPLEX_GRID ([[-1,20],[-1,14],[0.1]]);



var floor = STRUCT ([f1,f2,f3,f4,f5,f6,f7,f8,f9]);

DRAW (floor)



//muri





var wallPool1 = SIMPLEX_GRID ([[-0.8,7.2],[-0.8,0.2],[-1,3]]);

var wallPool2 = SIMPLEX_GRID ([[-0.8,0.2],[-1,25],[4]]);

var wallPool3 = SIMPLEX_GRID ([[-1,8],[-25.85,0.2],[4]]);

 var wallPool4 = SIMPLEX_GRID ([[-9,0.2],[-23,3],[4]]);;



var wallPool = STRUCT ([wallPool1,wallPool2,wallPool3,wallPool4]);

DRAW(wallPool)