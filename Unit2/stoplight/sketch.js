let timer = 0;
let state = 0;
let x = 0;
let vel = 0;

function setup() {

  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {

  background(20, 185, 250);

fill('yellow');
stroke(138, 145, 140);
rect(width/2,height/2, 200,600);



  switch(state) {
    case 0: //red
    fill(219, 7, 14);
    ellipse(width/2,height/2-180, 150, 150);
    fill(138, 145, 140);
    ellipse(width/2,height/2, 150, 150);
    ellipse(width/2,height/2+180, 150, 150);
    vel= 0;
    break;

    case 1: //green
    fill(138, 145, 140);
    ellipse(width/2,height/2-180, 150, 150);
    ellipse(width/2,height/2, 150, 150);
    fill(13, 212, 52);
    ellipse(width/2,height/2+180, 150, 150);
    vel = 10;
    break;

    case 2: //yellow
    fill(138, 145, 140);
    ellipse(width/2,height/2-180, 150, 150);
    fill(255, 235, 20);
    ellipse(width/2,height/2, 150, 150);
    fill(138, 145, 140);
    ellipse(width/2,height/2+180, 150, 150);
    vel = 5;
    break;

  }

  timer++ ;
  if (timer > 3 * 60 ){
    timer = 0;
    state++ ;
    if(state > 2){
      state = 0;
    }
  }
  //car code
  fill(192, 20, 250);
  stroke(0);
  rect(x ,height-100,100,50);
  x = x + vel ;
  if (x > width){
    x =0;
  }


}
