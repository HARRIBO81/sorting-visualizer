var g = false;
var new_states = [];
async function quickSort(arr, start, end) {
  document.getElementById("b1").disabled = true;
  document.getElementById("b2").disabled = true;
  document.getElementById("b3").disabled = true;
  if(isSorted(arr)) {
    if(!g){
      g = true;
      for(let i = 0; i <= states.length-1; i++) {
        new_states[i] = 1;
    }
    console.log(states)
      setTimeout(function() {
        alert("Array Sorted!");
    }, 350);
    }
    
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
  }
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  states[index] = -1;
  
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}
  
async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }
  
  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);
  
  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }
  return pivotIndex;
}
  
async function swap(arr, a, b, ) {
  await sleep(20);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
  
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

