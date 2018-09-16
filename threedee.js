var canvas;
var cone;

function preload() {
	cone = loadModel("images/iceCreamCone.obj");
	cream = loadModel("images/iceCream.obj");
	creamTex = loadImage("images/cream3.png");
	cam = createCapture(VIDEO);
	cam.hide();
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
	ambientLight(233);
	directionalLight(255,255,255,0,0,1);
	var mousePos = mouseY*-1
	// Ice Cream Cone
	push();
		scale(3);
		rotateX(0 + mouseY/8);
		rotateY(frameCount * 0.2);
		rotateZ(180 + mouseY/8);
		normalMaterial();
		model(cone);
		texture(creamTex);
		model(cream);
	pop();
	translate(0,-300,-800 + mouseY);
	// You
	push();
		rotateY(180);
		scale(2);
		tex = texture(cam);
		tex.scale(-1,1);
		sphere(150);
	pop();
}

