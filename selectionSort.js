const test = [2, 1, 5, 6, 12, 4, 3, 1];

const selectionSort = (arr) => {
  let len = arr.length;
  for (i = 0; i < len; i++) {
    let min = i;
    for (j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};


console.log(selectionSort(test))