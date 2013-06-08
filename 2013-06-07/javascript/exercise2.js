
/* A lake can be obtained by adding a colored parallelepiped (green-water) to a 
digital terrain model, in such a way that the height of the parallelepiped gets higher 
than the altitude of the bottom-valley pattern.

A suitable lake model should be added to the mountains defined by the previous exercise. 

*/






// exercise1


var domain = DOMAIN([[-40,40],[-40,40]])([30,30]);

var mountains = function(point){
	
	var x = point[0];
	var y = point[1];
	var z = Math.pow(Math.random()*3 * SIN(x) * COS(y),1.5);

	var random = Math.random();



	return [x,y,random + z];


}


var terrain = MAP(mountains)(domain);

DRAW(COLOR([122/255, 84/255, 59/255])(terrain));



//exercise2


var x=0;
var y=1;
var z=2;



//DOMINIO
var domain2 = DOMAIN([[0,30],[0,30]])([40,40]);


var lake = CUBOID([11,9,0.5]);
lake = T([x,y])([8.5,8])(lake);
lake = COLOR([0/255,204/255,153/255,0.85])(lake);
DRAW(lake);

