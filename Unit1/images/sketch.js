let adventure, germany, ledzeppelin;

function setup() {
  createCanvas(500, 500);
  adventure = loadImage("assets/adventure.jpg")
  germany = loadImage("assets/germany.jpg")
  ledzeppelin = loadImage("assets/ledzeppelin.jpg")
  imageMode(CENTER);
}

function draw() {
  background('orange');
image(adventure, width/2,height/2,100,100);
image(germany, width/2,height/2-120,100,100);
image(ledzeppelin, width/2,height/2+120,100,100);
}
