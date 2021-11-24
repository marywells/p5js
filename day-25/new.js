function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(255);
  for (let i = 0; i < 900; i += 9) {
    tighter = random(10, 150);
    looser = random(150, 255);

    push();
    noFill();
    strokeWeight(random(1, 5));
    stroke(tighter, looser, tighter, looser);
    ellipse(i, i, 400, i);
    pop();
  }
}
