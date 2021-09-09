let song1, font1;

function preload(){
  song1 = loadSound("assets/slowmotion.mp3");
}




function setup() {
  createCanvas(900, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  song1.loop() ;
  font1 = loadFont("assets/space Xrebron.ttf");

}



function draw() {
  background(50, 20, 102);

  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    stroke(0);
    fill(204);
    ellipse(450, 1000, 1000, 550);

    fill(240, 103, 226);
     rect(600, 694, 100, 50);

     fill(186, 146, 99);
      ellipse(644, 729, 55, 55);

      line(643,701,643,757);

      line(616,727,670,727);

      line(663,747,625,709);

       line(624,747,662,709);

       stroke(0);
       fill(52, 158, 235);
       rect(600,689,100,15);

       stroke(0);
       fill(52, 158, 235);
       rect(569,693,15,50);


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

   stroke(0);
   fill(204);
   arc(384,738,140,60, TWO_PI,PI);

   arc(247,772,140,60, TWO_PI,PI);

   arc(566,756,140,60, TWO_PI,PI);


   fill(232, 102, 21);
    ellipse(33, 300, 500, 500);

    fill(0);
     ellipse(82, 333, 600, 145);

     stroke(255);
     line(280,500,280,568);

     line(258,525,299,525);

     line(264,535,294,512);

     line(294,533,267,512);

     line(656,72,656,143);

     line(633,88,681,88);

     line(640,97,669,79);

     line(642,75,664,96);

     stroke(0);
     fill(7, 97, 13);
     ellipse(593,344,200,200);


     stroke(145, 83, 16);
     fill(145, 83, 16);
     rect(589,289,100,10);



     stroke(6, 38, 184);
     fill(6, 38, 184);
     rect(556,333,100,10);

     stroke(255);
     line(561,312,653,312);

     line(560,268,626,268);

      line(525,355,632,355);

      line(564,392,624,392);

     stroke(145, 83, 16);
     fill(145, 83, 16);
     rect(599,372,100,10);

     stroke(6, 38, 184);
     fill(6, 38, 184);
     rect(593,413,100,10);

     stroke(0);
     fill(10, 36, 207);
     ellipse(421,162,23,23);

     stroke(255);
     line(411,167,431,156);


     line(412,153,425,172);

     stroke(242, 16, 0);
     line(408,162,432,162);

     line(408,163,431,163);

     line(417,172,422,150);

     line(417,172,423,150);

     stroke(255);
     line(424,403,424,464);

     line(398,417,440,417);

     line(409,428,439,408);

     line(432,427,413,406);

     line(415,575,415,630);

     line(390,589,433,589);

     line(401,598,424,580);

     line(403,578,422,596);


     stroke(255);
     fill(255);
     textFont(font1);
     textSize(15);
     text("Elmer has taken a balloon and now is floating in the air of the\n moon. Now since the moon has a lighter gravity, he is testing\n to see how high the balloon will take him. Now all we have to\n do is wait.",20,20);





  } else {
    // when the mouse isn't pressed!
    stroke(0);
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

    fill(186, 146, 99);
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

stroke(255);
 line(136,147,136,188);

 line(128,157,142,169);

 line(129,168,146,155);

 line(120,164,147,161);

 line(246,92,246,146);

line(225,109,261,109);

line(236,99,253,117);

line(252,100,240,115);

stroke(0);
fill(99, 95, 95);
ellipse(424,93,75,75);

arc(408,78,15,15,PI, TWO_PI);

arc(408,108,15,15,PI, TWO_PI);


arc(435,96,16,17,PI, TWO_PI);

stroke(242, 97, 19);
line(456,65,523,45);


stroke(240, 204, 24);
line(462,72,544,51);

stroke(242,97,19);
line(469,85,546,61);


stroke(240,204,24);
line(467,96,555,69);


stroke(0);
fill(204);
arc(118,692,140,60, TWO_PI,PI);

arc(320,641,140,60, TWO_PI,PI);

arc(484,725,140,60, TWO_PI,PI);

arc(632,636,140,60, TWO_PI,PI);

arc(729,712,140,60, TWO_PI,PI);

arc(240,746,140,60, TWO_PI,PI);

stroke(0);
line(603,541,692,541);

stroke(0);
line(648,586,648,496);

stroke(0);
line(685,516,611,565);

stroke(0);
line(681,570,616,508);


fill(10, 36, 207);
ellipse(342,440,23,23);

stroke(255);
line(348,447,333,431);

line(332,445,351,432);

stroke(242, 16, 0);
line(331,439,352,439);

line(341,451,341,429);

line(330,440,352,440);

line(340,449,340,428);

stroke(0);
fill(52, 158, 235);
rect(590,483,148,20);

stroke(0);
fill(52, 158, 235);
rect(537,488,20,90);


stroke(0);
line(529,532,504,555);


stroke(255);
line(91,282,91,334);

line(73,300,106,300);

line(81,308,103,288);

line(99,308,82,288);



 // if you need a break its \n
 // so i can read it \
stroke(255);
 fill(255);
 textFont(font1);
 textSize(15);
text("This is Elmer Johnson Benedict III. He is a astronaut from a long line of British Space Cadet. \n He has been sent to the moon to try some experiments. One of these experiments has \n to do something with these balloons he has over there. Let's see what he does with them.",20,20);
  }

  // this shows mouse location - comment it out when you're done!

stroke(255);
  //text(mouseX + ", " + mouseY, 150, 150);

}

// if you need a break its \n
// so i can read it \





// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}

function touchStarted() {
  getAudioContext().resume();
}
