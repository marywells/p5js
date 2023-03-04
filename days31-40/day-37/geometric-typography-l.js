function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  stroke(255);
  fill(255);
  strokeWeight(2);

  let margin = 4;
  let x1 = 125;
  let y1 = 110;
  let x2 = 125;
  let y2 = 375;

  line(x1, y1, x2, y2);
  line(x1 + margin, y1, x2 + margin, y2);
  line(x1 + margin * 2, y1, x2 + margin * 2, y2);
  line(x1 + margin * 3, y1, x2 + margin * 3, y2);
  line(x1 + margin * 4, y1, x2 + margin * 4, y2);
  line(x1 + margin * 5, y1, x2 + margin * 5, y2);
  line(x1 + margin * 6, y1, x2 + margin * 6, y2);
  line(x1 + margin * 7, y1, x2 + margin * 7, y2);
  line(x1 + margin * 8, y1, x2 + margin * 8, y2);
  line(x1 + margin * 9, y1, x2 + margin * 9, y2);
  line(x1 + margin * 10, y1, x2 + margin * 10, y2);
  line(x1 + margin * 11, y1, x2 + margin * 11, y2);
  line(x1 + margin * 12, y1, x2 + margin * 12, y2);
  line(x1 + margin * 13, y1, x2 + margin * 13, y2);

  let xx1 = 180;
  let yy1 = 375;
  let xx2 = 345;
  let yy2 = 375;

  line(xx1, yy1, xx2, yy2);
  line(xx1, yy1 - margin, xx2, yy2 - margin);
  line(xx1, yy1 - margin * 2, xx2, yy2 - margin * 2);
  line(xx1, yy1 - margin * 3, xx2, yy2 - margin * 3);
  line(xx1, yy1 - margin * 4, xx2, yy2 - margin * 4);
  line(xx1, yy1 - margin * 5, xx2, yy2 - margin * 5);
  line(xx1, yy1 - margin * 6, xx2, yy2 - margin * 6);
  line(xx1, yy1 - margin * 7, xx2, yy2 - margin * 7);
  line(xx1, yy1 - margin * 8, xx2, yy2 - margin * 8);
  line(xx1, yy1 - margin * 9, xx2, yy2 - margin * 9);
  line(xx1, yy1 - margin * 10, xx2, yy2 - margin * 10);
  line(xx1, yy1 - margin * 11, xx2, yy2 - margin * 11);
  line(xx1, yy1 - margin * 12, xx2, yy2 - margin * 12);
}
