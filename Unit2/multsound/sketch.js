let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/donkey.mp3");
  song2 = loadSound("assets/skate.mp3");
  song3 = loadSound("assets/thrill.mp3");

  song1.loop();
  song2.loop();
  song3.loop();
  song1.pause();
  song2.pause();
  song3.pause();
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background(20, 185, 250);
      song1.loop();
      state = 1;
      break;

    case 1:
      background(242, 60, 19);

      break;

    case 2:
      song2.loop();
      state = 3;
      break;

    case 3:
      background(19, 232, 36);

      break;
    case 4:
      song3.loop();
      state = 5;
      break;

    case 5:
      background(23, 23, 232);
      break;

  }
}

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();
  state++;
  if (state > 5) {
    state = 0;
  }
}
