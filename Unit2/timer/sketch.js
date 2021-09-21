let state = 0;
let timer = 0;
let f1;

function setup() {
  createCanvas(500, 500);
    f1 = loadFont("assets/LoversQuarrel.ttf");
}

function draw() {
  background(220);

  switch(state){

    case 0:
      background(252, 96, 145);
      fill(209, 0, 21);
      textSize(40);
      textFont(f1);
      text("Roses are Red", 100, 100);
      break;


      case 1:
      background(65, 185, 250);
      fill(163, 56, 245);
      textSize(40);
      textFont(f1);
      text("Violets are Blue", 150, 150);
      break;

      case 2:
      background(247, 240, 15);
      fill(240, 151, 43);
      textSize(50);
      textFont(f1);
      text("I forgot the Word and\n so have you", 200, 200);
      break;

 }
 timer++;
 if (timer > 3 * 60) {
   timer = 0;
   state++;
  if (state > 2) state = 0;
  }

}
