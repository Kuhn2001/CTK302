var mic;
var vol;
let x = 0 ;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(35, 198, 247);
noStroke();
  fill(255);
   ellipse(68, 38, 72, 72);

   fill(255);
   ellipse(116, 38, 72, 72);

   fill(255);
   ellipse(154, 65, 72, 72);

     fill(255);
   ellipse(25, 75, 72, 72);

     fill(255);
   ellipse(60, 105, 72, 72);

     fill(255);
   ellipse(96, 73, 72, 72);

     fill(255);
   ellipse(120, 105, 72, 72);


  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .100) { // if the volume is LOUD?
    // do something


  }

  // extra stuff for debugging
  //textSize(18);
  //text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

    fill(140, 143, 139);
  ellipse(vol*500, 200, 200, 75,75);
    fill(57, 217, 4);
  arc(vol* 700, 170, 75, 75, PI, TWO_PI);






  x = map(vol, 0, .2, 0, width) ;
  //line(x, 200, 50, 50);



}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
