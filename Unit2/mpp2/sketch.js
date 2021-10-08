let state = 0;
let timer = 0;
let mic;
let vol;
let couple,some,most,start;

function setup() {
  createCanvas(500, 500);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  couple = loadImage("assets/couple.jpg");
  some = loadImage("assets/some.jpg");
  most = loadImage("assets/most.jpg");
  start = loadImage("assets/start.jpg");
}

function draw() {


  switch (state) {
    case 0:
      background('black');
      image(cake, 200, 200, 150, 150);
      text("welcome, please click on the cake", 100, 100);
      break;

    case 1:
      background('yellow');
      text("listening", 100, 100);
      // get the sound input
      vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1
      if (vol > .1) {
        state = 2 ;
      }
      break;

    case 2:
      background('red');
      text("state 2", 100, 100);
      break;

  }

  fill('white');
  text(mouseX + ", " + mouseY, 15, 15);
}

function mouseReleased() {
  if ((state == 0) && (mouseX > 200) && (mouseX < 350) && (mouseY > 200) && (mouseY < 350)) {
    state = 1;

  }
}

function touchStarted() {
  getAudioContext().resume();
}
