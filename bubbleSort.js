const test = [2, 1, 5, 6, 12, 4, 3, 1];

const swap = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
  return a, b;
};

const bubbleSort1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap(arr[j], arr[j+1])
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      // console.log(arr[j])
    }
  }
  console.log(arr);
};

bubbleSort1(test);
