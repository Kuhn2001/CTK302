function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(151, 218, 247);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    fill(255);
     ellipse(252, 144, 72, 72);
  } else {
    // when the mouse isn't pressed!
    fill(204);
     triangle(288, 18, 351, 360, 288, 360);
  }



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
