// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
let splashscreen, badleave, bag, grass2, leave;
let state = 0;

// var bunnyImage;
var cars = [];
var frogPos;


function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


  // spawn a bunch of cars
  for (var i = 0; i < 200; i++) {
    cars.push(new Car());
  }

  // initialize the frog's position
  frogPos = createVector(width / 2, height - 80);

  // load any images you need
  //bunnyImage = loadImage("assets/bunny.jpg");
  bag = loadImage("assets/bag.png");
  grass2 = loadImage("assets/grass2.jpeg");
  badleave = loadImage("assets/badleaves2.png");
  leave = loadImage("assets/goodleave.png");
  splash = loadImage("assets/splashscreen.png");
  //imageMode(CENTER);


}

function draw() {

  switch (state) {
    case 0:
      image(splash, 0, 0, windowWidth, windowHeight);
      break;


    case 1:
      game();
      break;


  }
}

function game() {


  image(grass2, 0, 0, windowWidth, windowHeight);

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);
//  xPosition = mouseX;
//  yPosition = mouseY;



  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
  image(bag, 0, 0, 175, 225);
  pop();


  // update the frog's position using the accelerometer data
  frogPos.x = xPosition;
  frogPos.y = yPosition;

  // iterate through the car loop to move them and see if we need to delete cars
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if ((cars[i].pos.dist(frogPos) < 50) && (cars[i].pos.y < height - 150)) {
      cars.splice(i, 1);
    }
  }

}

function deviceShaken() {
  // re-spawn cars
  cars = []; // clear the array first
  for (var i = 0; i < 200; i++) {
    cars.push(new Car());
  }
  state = 0;
}


function mouseReleased() {
state = 1;


}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});





// car class!!
function Car() {
  // attributes
  this.pos = createVector(random(width), random(-1000));
  this.vel = createVector(0, random(.5, 8));
  this.size = random(80, 130);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.a = random(255); // alpha opacity value for fill!
  this.type = random(2);

  // methods
  this.display = function() {

    // maybe use an image here instead!
    if (this.type > 1) {
      image(badleave, this.pos.x, this.pos.y, this.size, this.size);
    } else {
      image(leave, this.pos.x, this.pos.y, this.size, this.size);
    }

  }

  this.drive = function() {

    //  if (this.pos.x > width) this.pos.x = 0;
    //  if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y < height - 100) {
      this.pos.add(this.vel);
    }
    //  if (this.pos.y < 0) this.pos.y = height;

  }

}
