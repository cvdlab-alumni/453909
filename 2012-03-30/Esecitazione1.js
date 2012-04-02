//dominio monodimensionale

var domain = DOMAIN ([[0,2]])([2]);

DRAW (domain) //DRAW per disegnare il dominio

//dominio bidimensionale

var domain2 = DOMAIN ([[0,2],[0,2]])([2,1]);

DRAW(domain2)

//dominio tridimensionale

var domain3 = DOMAIN ([[0,2],[0,2],[0,2]])([2,1,1]);

DRAW(domain3);
COLOR([2,3,0])(domain3); //COLOR([r,g,b])(domain3) per colorare 


// MAPPING

var domain = DOMAIN ([[0,1]])([10]);

var mapping = function (p){
	
   var u = p[0];

      return [u,1];


};

var mapped = MAP (mapping)(domain);

DRAW(mapped);
COLOR([0,0,0])(mapped); 


//circonferenza di raggio r ed n segmenti

var drawCircle = function (r,n){
	
var domain = DOMAIN ([[0,2*PI]])([n]);

var circle = function (p){
	
	var u = p[0];

	return [r*SIN(u),r*COS(u)];
};

var mapped = MAP (circle)(domain);

DRAW(mapped);

COLOR([0,0,0])(mapped);



};

drawCircle (2,100); 


