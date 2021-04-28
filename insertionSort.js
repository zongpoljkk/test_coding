const test = [2, 1, 5, 6, 12, 4, 3, 1];

const insertionSort = (arr) => {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort(test));
