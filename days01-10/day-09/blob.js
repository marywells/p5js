function setup() {
  createCanvas(800, 800);
  background(255);
  noLoop();
}

function draw() {
  for (let i = 0; i < width; i += 20) {
    for (let j = 0; j < height; j += 20) {
      point(i, j);
      stroke(0);
      strokeWeight(random(0, 35));
    }
  }
}
