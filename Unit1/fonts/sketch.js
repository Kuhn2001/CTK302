let f1,f2;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Architects_Daughter/Daughter.ttf");
  f2 = loadFont("assets/Rampart_One/RampartOne.ttf");
}

function draw() {
  background("yellow");
textFont(f1);
textSize(24);
text("hello world",width/2,100);

textFont(f2);
textSize(24);
text("Sic Parvis Magna", width/2,160);
}
