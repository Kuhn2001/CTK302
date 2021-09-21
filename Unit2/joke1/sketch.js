let state = 0;
let f1;

function setup() {
  createCanvas(500, 500);
    f1 = loadFont("assets/BonheurRoyale.ttf");
}

function draw() {
switch(state){
case 0:
background('orange');
fill('black');
textSize(40);
textFont(f1);
text("You don't need a parachute to go \nskydiving :)", 20, 30);
break;

case 1:
background('blue');
fill('white');
textSize(40);
textFont(f1);
text("You need a parachute to go skydiving \ntwice ;)", 40, 100);
break;

  }
}


function mouseReleased(){
  state++ ;
  if (state > 1) state=0;
}
