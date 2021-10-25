let values = [];

let i = 0;
let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  values = new Array(width + 1);

  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    //values[i] = noise(i / 100.0) * height;
  }
}

function draw() {
  background(149, 213, 178);

  if (i < values.length) {
    for (let j = 0; j < values.length - i - i; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log('sorted!');
    noLoop();
  }

  for (let i = 0; i < values.length; i++) {
    stroke(64, 145, 108);

    line(height, i, j, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
