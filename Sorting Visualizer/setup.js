let values = []; // Array of values being sorted, reprsented by pixels
let w = 10;
let states = []; // Color state

function setup() {
  createCanvas(windowWidth, windowHeight-87);
  resetArray();
}

// Function called when site is loaded, or "New Array" is called
function resetArray() {
  values = new Array(floor((width / w)));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
    new_states[i] = -1;
  }
}

// Sets the colors according to their value in the states array
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

// Sleep function allows the latency used in the swap function to visaulize the sorting. Without sleep, sorting would be instant.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function used in many sorting algorthims used. Swaps two values of an array
async function swap(arr, a, b, ) {
  await sleep(1);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// Checks if the array has been sorted
function isSorted(array) {
  var sorted = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]) {
      sorted = false;
      break;
    }
  }
  return sorted
}

// Disables all buttons while a sorting process is running, in order to avoid running more then one algorthim at once
function disable() {
  for(let i = 1; i <= 5; i++) {
      document.getElementById("b"+i).disabled = true;
  }
}

// Enables all buttons once sorting process is complete
function enable() {
  for(let i = 1; i <= 5; i++) {
      document.getElementById("b"+i).disabled = false;
  }
}