function mergeSort(a) {
    disable();
    copy = a.slice()
    mergeSortSlice(copy, 0, copy.length);
    return;
}

function colourIn(states) {
    for(let i = 0; i <= values.length; i++) {
        states[i] = 1;
    }
}

async function mergeSortSlice(a, start, end) {
    if (end-start <= 1) {
        return;
    }
    
    var mid = Math.round((end+start) / 2);
    await mergeSortSlice(a, start, mid);
    await mergeSortSlice(a, mid, end);

    let i = start, j = mid;
    states[i] = 0
    states[mid] = 0
    while (i < end && j < end) {
        states[i] = -1
        if (a[i] > a[j]) {
            let t = a[j]; a.splice(j, 1); a.splice(i, 0, t);
            j ++;
        }
        i ++;
        if (i==j) j ++;

        values = a.slice();
        
        await sleep(10);
    }
    if (start == 0 && end == a.length) {
        await sleep(50);
        startSort = true;
    }
    if(isSorted(a)) {
        colourIn(states);
        setTimeout(function() {
            window.alert("Array Sorted!");
        }, 200);
        enable();
        return
    }
}