const test = [2, 1, 5, 6, 12, 4, 3, 1];

const swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const partition = (arr, low, high) => {
  let q = low,
    i;
  for (i = low; i < high; i++) {
    if (arr[i] < arr[high]) {
      swap(arr, i, q);
      q++;
    }
  }
  swap(arr, i, q);
  return q;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
    return arr;
  }
};

console.log(quickSort(test, 0, test.length - 1));
