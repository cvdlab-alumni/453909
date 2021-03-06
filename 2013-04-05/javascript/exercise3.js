/*Define, with names north, south, east, and west, the 4 models of vertical enclosures (including the hollows),
 and add them to the STRUCT of the building model.*/




//North

var n0a = SIMPLEX_GRID([[-3.2-1.7,0.5],[-0.5-3.6+0.7,0.7],[0.14+1]])
var n0b = SIMPLEX_GRID[[-3.2-1.7,0.5],[-0.5-3.6+0.7,0.4,-0.3],[-0.14-1,1]])
var n0c = SIMPLEX_GRID([[-3.2-1.7,0.5],[-0.5-3.6+0.7,0.7],[-0.14-1-1,0.36]])

var n0d = SIMPLEX_GRID([[((-0.5-4.8)*3),0.5],[-0.5-3.6,1.7],[0.14+2]])
var n0e = SIMPLEX_GRID([[((-0.5-4.8)*3),0.5],[-0.5-3.6,1.7+1.5],[-0.14-2,0.36]])

var n0 = STRUCT([n0a,n0b,n0c,n0d,n0e])



var n1a = SIMPLEX_GRID([[((-0.5-4.8)*4),0.5],[0.5+3.6+1.7+1.5+0.5+1.8+0.5+1.8+0.5],[-0.14-2.7,0.14]])
var n1b = SIMPLEX_GRID([[((-0.5-4.8)*4),0.5],[0.5+3.6+1.7+1.5+0.5+1.8+0.5+1.3,-0.5,0.5],[-0.14-2.7-0.14,1]])
var n1c = SIMPLEX_GRID([[((-0.5-4.8)*4),0.5],[0.5,-3.6-0.5-1.2-1.5-0.5-1.8-0.5-0.3,1,-0.5,0.5],[-0.14-2.36-0.14-1,1]])
var n1d = SIMPLEX_GRID([[((-0.5-4.8)*4),0.5],[0.5+3.6+1.7+1.5+0.5+1.8+0.5+1.3,-0.5,0.5],[-0.14-2.7-0.14-2,0.36]])

var n1 = STRUCT([n1a,n1b,n1c,n1d])

var n2 = T([2])([2.7+0.14])(n1)

var n3 = T([2])([2.7+0.14])(n2)

var nr = SIMPLEX_GRID([[((-0.5-4.8)*4)-0.25,0.25],[0.5+3.6+1.7+1.5+0.5+1.8+0.5+1.8+0.5],[((-0.14-2.7)*4),0.14+0.5]])
var north = STRUCT([n0,n1,n2,n3,nr])


DRAW(north)