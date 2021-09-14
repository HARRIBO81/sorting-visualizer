let values = [];
let w = 10;
let states = [];

function setup() {
  createCanvas(windowWidth, windowHeight-87);
  resetArray();
}

function resetArray() {
  values = new Array(floor((width / w)));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
}

function draw() {
  background('#667585');
  for (let i = 0; i < values.length; i+=2) {
    noStroke();
    if (states[i] == 0) {
      fill('#FC766AFF');
    } else if (states[i] == 1 || new_states[i] == 1) {
      fill('#184A45FF');
    } else {
      fill('#B0B8B4FF');
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}
