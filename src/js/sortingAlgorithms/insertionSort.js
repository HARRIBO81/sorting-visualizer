async function insertionSort(arr, n) 
{ 
    beingSorted = true;
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
           while (j >= 0 && arr[j] > key)
        { 
          states[j] = 0;
          states[j+1] = 0;
          await swap(arr, j+1, j);
          states[j+1] = 1;
          states[j] = 1;
          states[j-1] = 1;
          j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
} 
