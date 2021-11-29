let img;

function preload() {
  img = loadImage('avatar.jpg');
}

function setup() {
  createCanvas(450, 450);
  background(0);

  for (let i = 0; i < 800; i += 80) {
    for (let j = 0; j < 800; j += random(9, 200)) {
      copy(img, i, j, 70, 70, i, j, 70, 70);
    }
  }
}
