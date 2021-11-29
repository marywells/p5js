function setup() {
  createCanvas(800, 800);
  noLoop();
  background(0);
}
const white = 'rgba(182, 190,180,0.5)';

function draw() {
  for (let i = 0; i < 800; i++) {
    push();
    strokeWeight(random(0, 3));
    stroke(white);
    rect(i, i, 0, i);
    pop();
  }

  for (let i = 0; i < 800; i++) {
    push();
    strokeWeight(random(0, 3));
    stroke(white);
    line(i, i, 0, i);
    pop();
  }
}
