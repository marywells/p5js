let coswave = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width; i++) {
    let amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(cos(amount));
  }
  background(11, 11, 9);
  noLoop();
}

function draw() {
  for (let i = 0; i < width; i += 10) {
    stroke(coswave[i] * 255);
    line(i, 0, i, height);
    strokeWeight(3);
  }
}
