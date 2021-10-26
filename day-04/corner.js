let cell;

function setup() {
  createCanvas(800, 800);
  background(255);
  for (a = 1; a < 800; a = a + 3) {
    for (b = 1; b < 800; b = b + 3) {
      if (a % 2 == 1) {
        cell = color(255);
      }
      if (a % 2 == 0) {
        cell = color(0, 0, 255);
      }
      if (b % 2 == 1) {
        cell = color(255);
      }
      if (b % 2 == 0) {
        cell = color(0, 0, 255);
      }
      fill(cell);
      noStroke();
      rect(b, a, a - b, b - a);
    }
  }
}
