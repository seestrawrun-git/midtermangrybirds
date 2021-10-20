
let words = "Click Slingshot to Play"

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(0);

	//sky and ground
	noStroke();
	fill(135, 206, 235);
	rect(0, 0, windowWidth, windowHeight);
	fill(155, 118, 83);
	rect(0, windowHeight - 100, width, 100)

	//slingshot
	push();
	translate(50, 0);
	fill(250, 237, 39);
	rect(75, windowHeight-125, 20, 100);
	strokeWeight(10);
	stroke(250, 237, 39);
	line(85, windowHeight-125, 55, windowHeight - 185);
	line(85, windowHeight-125, 105, windowHeight - 185);
	pop();


	//boxes
	fill(101, 67, 33);
	strokeWeight(5);
	stroke(128, 96, 77);
	let box1 = new Box(width - 300, height - 150, 100, 100);
	box1.show();
	let box2 = new Box(width - 175, height - 115, 100, 100);
	box2.show();
	let box3 = new Box(width - 425, height - 115, 100, 100);
	box3.show();
	let box4 = new Box(box1.x - 15, box1.y - 100, 100, 100);
	box4.show();
	let box5 = new Box(box2.x - 15, box2.y - 100, 100, 100);
	box5.show();
	let box6 = new Box(box3.x - 15, box3.y - 100, 100, 100);
	box6.show();

	push();
	stroke(255);
	translate(width/2, height/2);
	text(words, 0, 0);
	pop();
	
	
}

class Box {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	show() {
		rect(this.x,this.y,this.width, this.height);
	}
}