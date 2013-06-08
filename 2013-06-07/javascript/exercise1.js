/A digital terrain model (DTM) is normally defined as a map that associates the vertices of a 
simplicial decomposition of a 2D rectangle (corresponding to a geographical map) with three coordinate 
functions x(u,v), y(u,v), z(u,v), where x(u,v) and y(u,v) are the selectors of the first and second coordinate 
of the vertices, and z(u,v) provides the height (altitude) of vertices. This one can be obtained by adding or 
subtracting a (relatively small) random number to the altitude values. HINT: To provide the initial values of 
altitude it is recommended to use either some mathematical function of two variables, or a surface generated from 
a few control points. The random correction of altitude must obviously be executed in a second computing stage.

Produce a model of mountainous terrain using the approach described above. /




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


