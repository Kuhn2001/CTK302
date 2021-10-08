var mic;
var vol;
let x = 0;
let state = 0;
let programStarted = false;
let couple, some, most, begin;

function setup() {
  createCanvas(600, 600);
  couple = loadImage("assets/couple.jpg");
  some = loadImage("assets/some.jpg");
  most = loadImage("assets/most.jpg");
  begin = loadImage("assets/begin.jpg");
  //loadimage Look at image in unit1
  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  imageMode(CENTER);
  //loadImage
  //adventure = loadImage("assets/adventure.jpg")
}


function draw() {

  //image(start, width / 2, height / 2, 600, 600);
  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .01) { // if the volume is LOUD?
    // do something
    state = 1;
  }
  // flat G steedy is good
  if (vol > .04) {
    state = 2;
  }
  if (vol > .07) {

    state = 3;
  }




  // extra stuff for debugging
  //textSize(18);
  //text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

  switch (state) {
    case 0: //splash screen
      image(begin, width / 2, height / 2, 600, 600);
      textSize(18);
      //text("click to start!", 100, 100);
      break;

    case 1:
      image(couple, width / 2, height / 2, 600, 600);
      textSize(18);
      //text("the start of the show", 100, 100);
      break;

    case 2:
      image(some, width / 2, height / 2, 600, 600);
      textSize(18);
      //text("people are showing up!",100,100);
      break;

    case 3:
      image(most, width / 2, height / 2, 600, 600);
      textSize(18);
      //text("Its a show now! ",100,100);
      break;



  }

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
  //programStarted = true;
}
