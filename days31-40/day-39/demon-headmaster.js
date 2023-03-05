let fg = 0;
let bg = '#f1f1f1';

function setup() {
  createCanvas(500, 500);
  frameRate(5);
}

function draw() {
  background(bg);
  stroke(fg);
  noFill();
  strokeWeight(17);
  rectMode(CENTER);

  for (let i = 0; i < constrain(frameCount, 1, 50); i++) {
    stroke('darkgreen');
    ellipse(width / 2, height / 2, i * 70, i * 70);
    stroke('green');
    ellipse(width / 2, height / 2, i * 20, i * 20);
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('gif', 5);
  }
}
