async function bubbleSort(arr, start, end) {
    beingSorted = true;
    if(start >= end) {
        return;
    }    
    for(var i = 0; i < end-1; i+=2) {
        for(var j = 0; j < end-i-1; j++) {
            if(arr[j] >= arr[j+1]) {
                states[j] = 0
                await swap(arr, j, j+1);
            }
            states[j] = -1;
        }
        if(j != 2) {
            states[j] = 1
        } else {
            states[j] = 1
            states[j-2] = 1
        }
    }
    return arr;
}
