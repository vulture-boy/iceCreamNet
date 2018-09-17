var canvas;
var cone;

function preload() {
	cone = loadModel("images/iceCreamCone.obj");
	cream = loadModel("images/iceCream.obj");
	flavourA = loadImage("images/cream1.png");
	flavourB = loadImage("images/cream2.png");
	flavourC = loadImage("images/cream3.png");
	flavPalette = loadImage("images/flavours.png");
	cam = createCapture(VIDEO);
	cam.hide();
}

function setup() {
	canvas = createCanvas(windowWidth,windowHeight,WEBGL);
	canvas.position(0,0);
	canvas.style('z-index','-1');
	angleMode(DEGREES);
	selFlavour = 1;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	loadPixels();
	background('rgba(0,0,0,0)');
	orbitControl();
	ambientLight(233);
	directionalLight(255,255,255,0,0,1);
	var mousePos = mouseY*-1;
	
	// Ice Cream Cone
	push();
		scale(3);
		rotateX(0);
		rotateY(frameCount * 0.2);
		rotateZ(180);
		normalMaterial();
		model(cone);
		if (selFlavour == 1) {texture(flavourA);}
		else if (selFlavour == 2) {texture(flavourB);}
		else if (selFlavour == 3) {texture(flavourC);}
		model(cream);
	pop();
	// You
	push();
		translate(-5*mouseY+windowWidth,-300,-800 + mouseY);
		rotateY(180);
		scale(2);
		tex = texture(cam);
		tex.scale(-1,1);
		sphere(150);
	pop();
	
	// Palette
	var palWidth = flavPalette.width/2;
	var palHeight = flavPalette.height/2;
	var palPaddingX = windowWidth/24;
	var palPaddingY = windowHeight/24;
	var flavWidth = palWidth/4;
	var flavHeight = palHeight/3;
	push();
		texture(flavPalette);
		// div by 2: planes draw from centre outwards
		translate((windowWidth-palWidth -palPaddingX )/2,(windowHeight-palHeight -palPaddingY)/2,10);
		plane(palWidth, palHeight);
		translate(0,flavHeight/2,1);
		texture(flavourA);
		plane(flavWidth, flavHeight);
		translate(-1* palWidth/2 + flavWidth,0,0);
		texture(flavourB);
		plane(flavWidth, flavHeight);
		translate(palWidth - flavWidth*2,0,0);
		texture(flavourC);
		plane(flavWidth, flavHeight);
	pop();
	
	var pixel = [0,0,0];
	pixel[0] = pixels[4*mouseX + 4*windowWidth*mouseY]
	pixel[1] = pixels[4*mouseX + 4*windowWidth*mouseY +1]
	pixel[2] = pixels[4*mouseX + 4*windowWidth*mouseY +2]

	// Select flavour via pixel colour
	if (mouseIsPressed) {
		if (pixel == [255,116,166]) {
			selFlavour = 3;
		} else if (pixel == [72,42,8]) {
			selFlavour = 2;
		} else if (pixel == [255,255,255]) {
			selFlavour = 1;
		}
		console.log(pixel[0]);
	}
}



