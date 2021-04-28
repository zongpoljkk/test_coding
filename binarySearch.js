const test = [2, 1, 5, 6, 12, 4, 3, 1];

const binarySearch = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex)/ 2);

    if (target === arr[midIndex]) {
      return midIndex;
    }

    if (target > arr[midIndex]) {
      startIndex = midIndex + 1;
    }

    if (target < arr[midIndex]) {
      endIndex = midIndex - 1;
    } else {
      return "not found";
    }
  }
  console.log("NOT FOUND");
};

console.log(binarySearch(test, 6));
