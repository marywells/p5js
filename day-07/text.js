let radius;
let str = 'congratulations';
let startAngle = 0;
let distanceAngle = 360;

function setup() {
  createCanvas(windowWidth, windowHeight);
  radius = min(width, height) / 3;

  textSize(radius / 4);
  textFont('GeorgiaItalic');

  textAlign(CENTER, BASELINE);
}

function draw() {
  background(0);

  noFill();
  noStroke();
  circle(width / 2, height / 2, radius * 2);

  let angleBetweenLetters = radians(distanceAngle) / str.length;

  push();
  translate(width / 2, height / 2);
  rotate(radians(startAngle));

  for (let i = 0; i < str.length; i++) {
    push();
    rotate(i * angleBetweenLetters);
    translate(0, -radius);
    fill(255);
    noStroke();
    text(str[i], 0, 0);
    pop();
  }
  pop();
}

//inspired by jeff thompson via youtube :)
