var bubbles = [];
let url = '';
let wood,plate;

function setup() {

wood = loadImage("assets/cool.jpg");
imageMode(CENTER);
plate = loadImage("assets/pngwing.com.png")

 //  let key = '1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0'; // this is KEY of the URL from the sheet

  //1kZ_4ERslEUdWKv1l5f_W6Kzz4W7YY3QG4iUue6EKKmw

     let key = '1kZ_4ERslEUdWKv1l5f_W6Kzz4W7YY3QG4iUue6EKKmw'; // this is KEY of the URL from the sheet


  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1" ;  // here I'm making the string for loadJSON.

  loadJSON(url, gotData);



  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects

function gotData(data) {

  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
     bubbles.push(new Bubble(data[i]['What is best'], data[i]['best toppings'])); // THESE NEED TO MATCH SPREADSHEET

  }

}


function draw() {
  image(wood, width/2,height/2,600,600);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }

}


// my Bubble class
class Bubble {

  constructor(best, toppings) { // only the order of these parameters matters!
    this.best = best;
    this.toppings = toppings;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);

  }


  display() {
image(plate,this.pos.x, this.pos.y, 100,100)
   stroke(51, 129, 255);
    fill('white');
    text(this.best + "\n" + this.toppings, this.pos.x, this.pos.y);
    noFill();
    //image(plate,this.pos.x, this.pos.y, 100,100)
    //ellipse(this.pos.x, this.pos.y, 100,100);

    this.pos.add(this.vel);
    if(this.pos.x > width) this.pos.x = 0;

  }



}
