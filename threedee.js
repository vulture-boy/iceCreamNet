var canvas;
var cone;

function preload() {
	cone = loadModel("images/iceCream2.obj");
	
}

function setup() {
	createCanvas(windowWidth,300,WEBGL);
	canvas.globalAlpha = 0.4;
}

function draw() {
	background("white");
	ambientLight(105);
	directionalLight(255,255,255,0,0,1);

	
	//scale(10.0);
	//model(cone);
	//box(80);
	rotateX(0.30);
	rotateY(0);
	rotateZ(frameCount * 0.01);
	normalMaterial();
	translate(0,100,0);
	model(cone);
}