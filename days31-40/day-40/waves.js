// trcc
let amount = 100;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  fill(100, 0, 0);
  noStroke();

  translate(width / 2, height / 2); // centre everything

  for (let i = 0; i <= amount; i++) {
    let y = map(i, 0, amount, -height * 0.6, height * 0.6); // alter the co-ordinates
    let x = map(
      sin(radians(frameCount + i * 5)),
      -1,
      1,
      -width * 0.4,
      width * 0.4
    );

    push();
    translate(x, y); // translate the position
    ellipse(0, 0, 15, 15);
    pop();
  }
}
