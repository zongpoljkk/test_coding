arr1 = [1, 3, 4, 5];
arr2 = [2, 4, 6, 8];

const mergeByOrder = (arr1, arr2) => {
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;

  const final = [];

  let i = 0;
  let j = 0;

  while (i < arr1Len && j < arr2Len) {
    if (arr1[i] < arr2[j]) {
      final.push(arr1[i]);
      i++;
    } else {
      final.push(arr2[j]);
      j++;
    }
  }
  return final.concat(arr1.slice(i)).concat(arr2.slice(j));
};

console.log(mergeByOrder(arr1, arr2));
