let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch(state){

    case 0:
      background('red');
      //text("state 0", 100, 100);
      for (var j = 0 ; j <= height ; j+=20) {
      for(var i = 0 ; i <= width ; i+=20){
    rect(i,j,5,5) ;
    }
  }

      break;
      case 1:
      background('yellow');
      //text("state 0", 100, 100);

      for (var j = 0 ; j <= height ; j+=20) {
      for(var i = 0 ; i <= width ; i+=20){
        fill(random(255));
    rect(i,j,5,15) ;
    }
  }

      break;
 }
 timer++;
if (timer > 5 * 60){
  timer = 0;

  state++;
  if(state > 4){
    state = 0;
  }



}
}
