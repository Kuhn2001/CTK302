var mic;
var vol;
let x = 0;
let timer = 0;
let state = 0;
let programStarted = false;
let song1,img,begin,couple, some, most;


function preload(){
  song1 = loadSound("assets/beyondtheline.mp3");
}


function setup() {
  createCanvas(800, 600);
  song1.loop() ;
  couple = loadImage("assets/couple.jpg");
  some = loadImage("assets/some.jpg");
  most = loadImage("assets/most.jpg");
  begin = loadImage("assets/begin.jpg");
  img = loadImage("assets/IMG_0406.jpg");
  //loadimage Look at image in unit1
  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  imageMode(CENTER);
  //loadImage
  //adventure = loadImage("assets/adventure.jpg")
}


function draw() {
  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .0) { // if the volume is LOUD?
    // do something
    state = 1;
  }
  if (vol > .02) { // if the volume is LOUD?
    // do something
    state = 2;
  }
  // flat G steedy is good
  if (vol > .04) {
    state = 3;
  }
  if (vol > .06) {

    state = 4;
  }

  switch (state) {
    case 0: //curtian opeing
      image(img, width / 2, height / 2, 800, 600);

      break;
    case 1: //splash screen
      image(begin, width / 2, height / 2, 800, 600);
      break;

    case 2:
      image(couple, width / 2, height / 2, 800, 600);
      break;

    case 3:
      image(some, width / 2, height / 2, 800, 600);
      break;

    case 4:
      image(most, width / 2, height / 2, 800, 600);
      break;
  }

}

timer++;
if (timer > 2 * 60) {
  timer = 0;
  state++;
 if (state > 2) state = 0;
 }

 function mouseReleased(){
   if (song1.isPlaying()) {
     song1.pause()
   }else {
     song1.loop();
   }
 }

function touchStarted() {
  getAudioContext().resume();
  programStarted = true;
}
