let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(205);
  fill(0,random(255),random(255));
  rect(x,100,100,100);
  x = x + random(10);

  if(x >= width){
    x = 0;

  }



}
