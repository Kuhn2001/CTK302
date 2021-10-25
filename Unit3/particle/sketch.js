let cars = [];
let witch;

function setup() {
  createCanvas(500, 500);
    witch = loadImage("assets/witch.png");
  noStroke();

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }



}

function draw() {
  background(255, 85, 0);
  image(witch,width/2,height/2,100,100);
  cars.push(new Car());


  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if(cars[i].a <= 0){
      cars.splice(i,1);
    }

  }

}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(10), random(10));
    this.size = random(15,25);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200,255);
  }

  // methods
  display() {
    fill(random(220),random(0),random(202, 248) ,this.a);
    ellipse(this.pos.x,this.pos.y , this.size, this.size);

  }
  move() {
    this.pos.add(this.vel);
       this.a -= 2;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
  //  if (this.pos.y < 0) this.pos.y = height;
  }
}
