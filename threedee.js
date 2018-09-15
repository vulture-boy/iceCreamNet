var canvas;
var cone;

function preload() {
	cone = loadModel("images/iceCreamCone.obj");
	cream = loadModel("images/iceCream.obj");
}

function setup() {
	canvas = createCanvas(windowWidth,windowHeight,WEBGL);
	canvas.position(0,0);
	canvas.style('z-index','-1');
	angleMode(DEGREES);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background("white");
	ambientLight(105);
	directionalLight(255,255,255,0,0,1);

	
	scale(3);
	rotateX(0);
	rotateY(frameCount * 0.2);
	rotateZ(180);
	normalMaterial();
	translate(0,0,0);
	model(cone);
	model(cream);
}

