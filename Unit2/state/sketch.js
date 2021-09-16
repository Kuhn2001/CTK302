let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch(state){

    case 0:
      background('red');
      for (let j = 0 ; j <= height ; j+=20) {
      for(let i = 0 ; i <= width ; i+=20){
        fill(random(54),random(255),random(134));
        stroke(13, 247, 255)
    rect(i,j,5,5) ;
    }
  }

      break;
      case 1:
      background(255, 73, 13);
      for (let j = 0 ; j <= height ; j+=20) {
      for(let i = 0 ; i <= width ; i+=20){
        fill(random(255),random(88),random(166));
        noStroke();
    rect(i,j,5,15) ;
    }
  }

      break;

       case 2:
      background(18, 204, 255);
      for (let j = 0 ; j <= height ; j+=20) {
      for(let i = 0 ; i <= width ; i+=20){
      fill(random(255),random(0),random(105));
      ellipse(i,j,30,30) ;
}
}
      break;

       case 3:
      background(random(13),random(186),random(255));
      for (let j = 0 ; j <= height ; j+=10) {
      for(let i = 0 ; i <= width ; i+=10){
    fill(247, 255, 13);
    arc(i, j, 10, 10, PI, TWO_PI);
  }
}
      break;

       case 4:
      background(0);
      for (let j = 0 ; j <= height ; j+=20) {
      for(let i = 0 ; i <= width ; i+=20){
        fill(random(255));
        rect(i, j, 5, 20);
  }
}
      break;
  }
}
function mouseReleased(){
  state++;
  if(state > 4){
    state =0;
  }
}
