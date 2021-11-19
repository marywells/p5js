//inspired by github.com/shiffman via youtube :)

let x, y;
let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  r = random(0, 255);
  g = random(0);
  b = random(0);
  x = random(width);
  y = random(height);
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 100);
}

/* notes: 
- p5 functions not available outside of setup and draw
*/
