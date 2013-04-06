/*Define plan by plan, with names floor0, floor1, floor2, floor3, and floor4, 
the 5 models of horizontal partitions, and add them to the STRUCT of the building model.*/




//pillars from exercise1




var cylinder = T([0,1])([0.25,0.25])(CYL_SURFACE([0.25,3])([60,1]))

var cylRow = STRUCT(REPLICA(5)([T([0,1])([0.25,0.25])(CYL_SURFACE([0.25,3+0.14])([60,1])),T([0])([0.5+4.8])]))
var cyl01 = T([1,2])([0.5+9.2,0.14])(cylinder)
var cyls01 = STRUCT([cylRow,cyl01])

var pil = CUBOID([0.5,0.5,3])

var pil01 = T([0,1])([0.5+2.2,0.5+9.2,0.14])(pil)
var pilRow = T([1])([9.2+0.5,0.14])(STRUCT(REPLICA(3)([T([0])([0.5+4.8]),pil])))
var pils01 = STRUCT([pil01,pilRow])

var pillars0 = STRUCT([cyls01,pils01])


// DRAW(pillars0)

//pillars at the first floor

var pilRow1a = STRUCT(REPLICA(5)([pil,T([0])([5.3])]))
var pilRow1b = T([1])([9.2+0.5])(STRUCT(REPLICA(3)([pil,T([0])([5.3])])))
var cyl1a = T([0,1])([0.5+4.8+0.5+4.8+0.5+4.8,0.5+9.2])(cylinder)
var pil1a = T([0,1])([0.5+4.8+0.5+4.8+0.5+4.8+0.5+4.8,0.5+9.2])(pil)


var pillars1 = T([2])([0.14+2.7+0.14])(STRUCT([pilRow1a,pilRow1b,cyl1a,pil1a]))

// DRAW(pillars1)


//pillars at the second floor

var pilRow2a = T([1,2])([0.5+9.2,0.14+((2.7+0.14)*2)])(pilRow1a)
var pilRow2b = STRUCT([T([2])([(0.14+((2.7+0.14)*2))]),pil,T([0])([0.5+4.8]),pil,T([0])([0.5+4.8+0.5+4.8+0.5+4.8]),pil])
var pillars2 = STRUCT([pilRow2a,pilRow2b])


// DRAW(pillars2)

//pillars at the third floor

var pilRow3a = STRUCT([T([0,1,2])([0.5+4.8+0.5+4.8,0.5+9.2,0.14+((2.7+0.14)*3)]),pil,T([0])([0.5+4.8]),pil,T([0])([0.5+4.8]),pil])
var pilRow3b = STRUCT([T([0,2])([0.5+4.8+0.5+4.8,0.14+((2.7+0.14)*3)]),pil,T([0])([0.5+4.8+0.5+4.8]),pil])
var pillars3 = STRUCT([pilRow3a,pilRow3b])

//DRAW(pillars3)

building = STRUCT([pillars0,pillars1,pillars2,pillars3])

DRAW(building)

/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
/*
*/



//Floor0


var f01 = SIMPLEX_GRID([[0.5+2.2+0.5],[-0.5-9.2,0.5+1.8+0.5],[0.14]])
var f02 = SIMPLEX_GRID([[-0.5-2.2,0.5+2+0.5+4.8+0.5+4.8+0.5],[-0.5-3.6,1.7+1.5+0.5+1.8+0.5+1.8+0.5],[0.14]])
var f03 = SIMPLEX_GRID([[-0.5-2.2-0.5-2-0.5-4.8-0.5-4.8-0.5,0.6],[-0.5-3.6-1.7,1.5],[0.14]])
var f04 = SIMPLEX_GRID([[-0.5-2.2-0.5-2-0.5-4.8-0.5-4.8-0.5,1.9],[-0.5-3.6-1.7-1.5,0.5+1.8+0.5+1.8+0.5],[0.14]])
var f05 = SIMPLEX_GRID([[-0.5-2.2,0.5+1.2+0.5],[-0.5-3.6+0.7,0.7],[0.14]])

var floor0 = STRUCT([f01,f02,f03,f04,f05])
DRAW(floor0)


//Floor1

var f11 = SIMPLEX_GRID([[0.25,-0.25-0.9,1.3+0.5+2+((0.5+4.8)*3)+0.5],[-0.5,9.2],[0.14]])
var f12 = SIMPLEX_GRID([[0.5+1.7+0.5+0.5+2+0.5,-4.8-0.5-0.5,4.2+0.5+4.8+0.5],[-0.5-9.2-0.25-0.25,1.8],[0.14]])
var f13 = SIMPLEX_GRID([[((0.5+4.8)*4)+0.5],[-0.5-9.2-0.25-0.25-1.8,+0.5],[0.14]])
var f14 = SIMPLEX_GRID([[((0.5+4.8)*4)+0.5],[-0.5-9.2,0.5],[0.14]])
var f15 = SIMPLEX_GRID([[((0.5+4.8)*4)+0.5],[0.5],[0.14]])


//balcony

var bal = T([0,1])([-2.2,0.5+9.2+0.3])(CUBOID([2.2,2,0.14]))

var floor1 = T([2])([2.7+0.14])(STRUCT([f11,f12,f13,f14, f15, bal]))

//DRAW(floor1)


//Floor2


var f21 = SIMPLEX_GRID([[((0.5+4.8)*4)+0.5],[-0.5-9.2-0.5-1.8,0.5],[0.14]])
var f22 = SIMPLEX_GRID([[0.5,-2.2-0.5-2-0.5-3.3,1.4+0.5+4.8+0.5+4.7+0.5],[-0.5-9.2-0.25,0.25+1.8],[0.14]])
var f23 = SIMPLEX_GRID([[0.5+0.9+0.25,-1.05-0.5-2,0.5],[-0.5-9.2,0.25],[0.14]])
var f24 = SIMPLEX_GRID([[0.5,-0.9,1.3+0.5+2+0.5+4.8+0.5+4.8+0.5+4.8+0.5],[-0.5-9.2-0.25,0.25],[0.14]])
var f25 = SIMPLEX_GRID([[((0.5+4.8)*4)+0.5],[9.2,0.5],[0.14]])
var f26 = SIMPLEX_GRID([[((0.5+4.7)*4)+0.5],[+0.5],[0.14]])
var f27 = SIMPLEX_GRID([[0.25],[-0.5,9.1],[0.14]])

var floor2 = T([2])([(2.78+0.14)*2])(STRUCT([f21,f22,f23,f24,f25,f26,f27]))

//DRAW(floor2)



//Floor3


var f31 = SIMPLEX_GRID([[((0.5+4.8)*4)+0.5],[0.5+9.2+0.25+0.25],[0.14]])
var f32 = SIMPLEX_GRID([[0.5+1.7+0.5+0.5+2+0.5+4.8+0.5,-4.8-0.5-0.5,+4.2+0.5],[-0.5-9.2-0.25,0.25+1.8],[0.14]])
var f33 = SIMPLEX_GRID([[((0.5+4.8)*4)+0.5],[-0.5-9.2-0.25-0.25-1.8,+0.5],[0.14]])

var floor3 = T([2])([(2.75+0.14)*3])(STRUCT([f31,f32,f33]))

//DRAW(floor3)


//Floor4

var f41 = SIMPLEX_GRID([[((0.5+4.8)*4)+0.5],[0.5],[0.14]])
var f42 = SIMPLEX_GRID([[0.5,-4.8-0.5-4.8,((0.5+4.8)*2)+0.5],[-0.5,+9.2],[0.14]])
var f43 = SIMPLEX_GRID([[((0.5+4.8)*4)+0.5],[-0.5-9.2,0.5+1.8+0.5],[0.14]])

var floor4 = T([2])([(2.74+0.14)*4])(STRUCT([f41,f42,f43]))

//DRAW(floor4)


var building2 = STRUCT([floor0,floor1,floor2,floor3,floor4])

DRAW(building2)