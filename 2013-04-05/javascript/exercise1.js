/* Define, with names pillars0, pillars1, pillars2, and pillars3,
 the models of pillars of the 4 house floors, and put them into the STRUCT of an initial building model.*/





var cylinder = T([0,1])([0.25,0.25])(CYL_SURFACE([0.25,2.70])([60,1]))

var cylRow = STRUCT(REPLICA(5)([T([0,1])([0.25,0.25])(CYL_SURFACE([0.25,2.70+0.14])([60,1])),T([0])([0.5+4.8])]))
var cyl01 = T([1,2])([0.5+9.2,0.14])(cylinder)
var cyls01 = STRUCT([cylRow,cyl01])

var pil = CUBOID([0.5,0.5,2.70])

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


var pillars1 = T([2])([0.14+2.5+0.14])(STRUCT([pilRow1a,pilRow1b,cyl1a,pil1a]))

// DRAW(pillars1)


//pillars at the second floor

var pilRow2a = T([1,2])([0.5+9.2,0.14+((2.5+0.14)*2)])(pilRow1a)
var pilRow2b = STRUCT([T([2])([(0.14+((2.5+0.14)*2))]),pil,T([0])([0.5+4.8]),pil,T([0])([0.5+4.8+0.5+4.8+0.5+4.8]),pil])
var pillars2 = STRUCT([pilRow2a,pilRow2b])


// DRAW(pillars2)

//pillars at the third floor

var pilRow3a = STRUCT([T([0,1,2])([0.5+4.8+0.5+4.8,0.5+9.2,0.14+((2.5+0.14)*3)]),pil,T([0])([0.5+4.8]),pil,T([0])([0.5+4.8]),pil])
var pilRow3b = STRUCT([T([0,2])([0.5+4.8+0.5+4.8,0.14+((2.5+0.14)*3)]),pil,T([0])([0.5+4.8+0.5+4.8]),pil])
var pillars3 = STRUCT([pilRow3a,pilRow3b])

//DRAW(pillars3)

pillars = STRUCT([pillars0,pillars1,pillars2,pillars3])

DRAW(pillars)



































