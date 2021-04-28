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

const tripleSum = (arr, arr_size, sum) => {
  const sorted = selectionSort(arr);

  for (let i = 0; i < arr_size - 2; i++) {
    let j = i + 1;
    let n = arr_size - 1;

    while (j < n) {
      if (arr[i] + arr[j] + arr[n] === sum) {
        return [arr[i], arr[j], arr[n]];
      } else if (arr[i] + arr[j] + arr[n] < sum) {
        j++;
      } else {
        n--;
      }
    }
    return false;
  }
};

console.log(tripleSum(test, test.length, 14));
