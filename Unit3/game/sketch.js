let cars = [];
let frogPos;
let maxCars = 10;
let state = 0;
let timer = 0;
let carsEaten = 0;
let fist,german;
let germantimer = 0;
let round = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
fist = loadImage("assets/fist.png");
german = loadImage("assets/german.png");


 for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
   }

  frogPos = createVector(width / 2, height - 80);

}

function draw() {
textSize(30);
  switch (state) {
    case 0:
    //button  if (mouseX < )
      background(252, 186, 3);
      fill('white');
      text("WAR. War never Changes! Click to Start", 100, 100);
      // image(splashcreen, .....)
      break;

    case 1:
      game();
      timer++;
      if (timer > 60 * 60) {
        state = 3;
        timer = 0;
      }
      break;

    case 2:
      background(72, 87, 250);
      fill('white');
      text("win", 100, 100);
      break;

    case 3:
      background(196, 6, 25);
      fill('white');
      text("lose", 100, 100);
      break;

      case 4:
      background(255, 129, 3);
      text("K.O Winner", 100,100);
      break;

  }


}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: //win
      resetTheGame();
      round++;
      if (round > 3){
        state = 4;
        //round = 0;
      } else {
      state = 0;
    }
      break;

    case 3: //lose
      resetTheGame();
      state = 0;
      break;

    case 4:
    // put you won the war
    break;

  }
}

function game() {
  background(28, 189, 170);
  switch (round){
    case 1:
    background(237, 0, 16);
    // background round 1
    break;

    case 2:
    background(29, 219, 149);
    // background round 2
    break;

    case 3:
    background(217, 158, 30);
    // backgound round 3
    break;
  }
  text("round "+round, 100,100);
  germantimer++;
  if (germantimer > 1*60){
    cars.push(new Car());
    germantimer = 0;
  }

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      carsEaten++;
    }
  }


  if (cars.length == 0) {
    state = 2;
  }
//print out how many Cars are left
fill(0);
textSize(16);
text("cars left: "+ cars.length+ "cars we collected = "+ carsEaten, 20,30);


  //make frog
  fill(35, 166, 37);
  image(fist,frogPos.x, frogPos.y, 100 ,100);
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  //checkForKeys();
  frogPos.x = mouseX;
  frogPos.y = mouseY;
}

function resetTheGame() {
  timer = 0;
  cars = [];
  maxCars += 5;
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }


}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}








// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height - 120));
    //this.vel = createVector(0, 0);
    this.cor = color(0, random(50, 100), random(190, 245), random(100));
    this.size = random(80, 130);
  }

  // methods

  display() {
      image(german,this.pos.x, this.pos.y, this.size , this.size);
    // fill(this.cor);
    // // rect(this.pos.x, this.pos.y, 75, 25);
    // textSize(this.size);
    // text("RAIN", this.pos.x, this.pos.y);
  }

  move() {
    //this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
