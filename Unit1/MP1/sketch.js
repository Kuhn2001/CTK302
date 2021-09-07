let song1;

function preload(){
  song1 = loadSound("assets/slowmotion.mp3");
}




function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  song1.loop() ;

}



function draw() {

  background(50, 20, 102);


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    fill(204);
    ellipse(450, 1000, 1000, 550);

    fill(240, 103, 226);
     rect(600, 694, 100, 50);

     fill(255);
      ellipse(644, 729, 55, 55);

     line(564, 718, 552, 730);

     fill(92, 84, 91);
      rect(651, 676, 30, 8);

 line(576, 668, 552, 594);

 fill(252, 8, 0);
  ellipse(547, 582, 50, 65);

 line(578, 667, 583, 603);

 fill(252, 218, 0);
  ellipse(590, 571, 50, 65);

 line(580, 666, 621, 597);

 fill(9, 181, 0);
  ellipse(630, 571, 50, 65);

 line(576, 667, 565, 550);

 fill(137, 5, 163);
  ellipse(561, 532, 50, 65);

  fill(255);
arc(462, 228, 30, 65, TWO_PI, PI );

fill(255);
arc(412, 228, 30, 65, TWO_PI, PI );

fill(255);
rect(412, 210, 30, 35);

fill(255);
rect(462, 210, 30, 35);

fill(255);
arc(437, 201, 80, 200, PI, TWO_PI);




fill(255);
arc(435, 196, 40, 25, TWO_PI, PI );

fill(255);
arc(391, 140, 27, 105, TWO_PI, PI );



 fill(255);
 arc(398, 140, 40, 15, PI,TWO_PI );

  fill(255);
  arc(474, 138, 44, 15, TWO_PI,PI );

  fill(255);
arc(486, 137, 20, 100, PI,TWO_PI );

line(490, 47, 486, 116);

fill(255, 145, 0);
 ellipse(491, 36, 50, 65);


 fill(255);
  ellipse(436, 110, 85, 75);

  fill(0);
   ellipse(435, 110, 90, 45);



  } else {
    // when the mouse isn't pressed!
    fill(204);
     ellipse(450, 880, 1200, 650);

     fill(255);
  arc(392, 534, 30, 65, TWO_PI, PI );

  fill(255);
arc(332, 534, 30, 65, TWO_PI, PI );

fill(255);
 rect(332, 516, 30, 35);

 fill(255);
  rect(392, 516, 30, 35);

  fill(255);
  arc(362, 497, 90, 250, PI, TWO_PI);

  fill(255);
arc(362, 487, 50, 35, TWO_PI, PI );

  fill(255);
arc(308, 419, 27, 105, TWO_PI, PI );

   fill(255);
    ellipse(359, 376, 100, 90);

    fill(255);
    arc(318, 420, 47, 15, PI,TWO_PI );

    fill(0);
     ellipse(362, 377, 100, 50);

     fill(255);
     arc(400, 420, 44, 15, PI,TWO_PI );

     fill(255);
   arc(408, 419, 27, 105, TWO_PI, PI );

   fill(240, 103, 226);
    rect(590, 488, 150, 90);

    fill(255);
     ellipse(648, 541, 90, 90);

    line(529, 534, 504, 556);

    fill(92, 84, 91);
     rect(674, 453, 40, 10);

line(566, 442, 524, 342);

fill(252, 8, 0);
 ellipse(520, 332, 60, 75);

line(569, 442, 574, 348);

fill(252, 218, 0);
 ellipse(572, 326, 60, 75);

line(570, 441, 610, 352);

fill(9, 181, 0);
 ellipse(621, 322, 60, 75);

line(567, 441, 542, 297);

fill(137, 5, 163);
 ellipse(537, 278, 60, 75);

line(568, 442, 591, 283);

fill(255, 145, 0);
 ellipse(595, 263, 60, 75);


  }

  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}

function touchStarted() {
  getAudioContext().resume();
}
