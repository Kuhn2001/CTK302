let cars = [];
let frogPos;
let maxCars = 10;
let state = 0;
let timer = 0;
let carsEaten = 0;
let fist,german,win,splashScreen, loseRound,backgroundOfGame,freedom;
let germantimer = 0;
let round = 1;
let f1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/AlteSchwabacher.ttf");
fist = loadImage("assets/fist.png");
german = loadImage("assets/german.png");
backgroundOfGame = loadImage("assets/backgroundOfGame.jpg");
loseRound = loadImage("assets/loseRound.jpg");
splashScreen = loadImage("assets/splashScreen.jpg");
win = loadImage("assets/win.jpg");
freedom = loadImage("assets/freedom.jpeg");


 for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
   }

  frogPos = createVector(width / 2, height - 80);

}

function draw() {
textSize(30);
  switch (state) {
    case 0:

      // background(252, 186, 3);
      // fill('white');
      // text("WAR. War never Changes! Click to Start", 100, 100);
      image(splashScreen, 0, 0,windowWidth, windowHeight);
      break;


    case 1:
      game();
      timer++;
      if (timer > 15 * 60) {
        state = 3;
        timer = 0;
      }
      break;

    case 2:
    //image(win, 0, 0,windowWidth, windowHeight);
      background(245, 5, 5);
      fill(255);
      textFont(f1);
      textSize(120);
      text("Mehr \n Kommen", 100, 350);
      break;

    case 3:
      background(0);
      fill(245, 5, 5);
      textFont(f1);
      textSize(120);
      text("Das \n Sterben",100, 350);
      //image(asRound, 0, 0,windowWidth, windowHeight);
      break;

      case 4:
      // background(255, 129, 3);
        image(freedom, 0, 0,windowWidth, windowHeight);
       fill(255);
       textFont(f1);
       textSize(120);
      text("Freiheit!", 600,100);
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
      state = 1;
    }
      break;

    case 3: //lose
      resetTheGame();
      state = 1;
      break;

    case 4:
    // put you won the war
    break;

  }
}

function game() {
  image(backgroundOfGame, 0, 0,windowWidth, windowHeight);
  switch (round){
    case 1:
    image(backgroundOfGame, 0, 0,windowWidth, windowHeight);
    // background round 1
    break;

    case 2:
    image(backgroundOfGame, 0, 0,windowWidth, windowHeight);
    // background round 2
    break;

    case 3:
    image(backgroundOfGame, 0, 0,windowWidth, windowHeight);
    // backgound round 3
    break;
  }
  fill(245, 5, 5);
  textFont(f1);
  textSize(60);
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

fill(255);
textFont(f1);
textSize(30);
text("Germans left: "+ cars.length+ " Knock out: "+ carsEaten, 20,30);


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
