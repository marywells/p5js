function setup() {
  createCanvas(800, 800);
  background(0, 79, 79);
  noLoop();
}

const green = 'rgba(0,255,0,0.25)';

function draw() {
  for (let i = 0; i < width; i += 19) {
    let num = random(20, 90);
    for (let j = 0; j < height; j += num) {
      rect(i, j, i, j);
      fill(0, 79, 79);
      stroke(green);
      strokeWeight(random(0, 35));
    }
  }
}
