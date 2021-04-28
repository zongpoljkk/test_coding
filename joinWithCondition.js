const test = [1, 2, 3, 4];

// const func = (arr) => {
//   const len = arr.length;
//   const final = [];
//   for (let i = 0; i < len; i++) {
//     let tmp = arr[i];
//     for (let j = i + 1; j < len; j++) {
//       tmp = tmp + "*" + arr[j];
//       if (j === len - 1) {
//         final.push(tmp);
//       }
//     }
//     tmp = "";
//   }
//   return final;
// };

const func = (arr) => {
  const len = arr.length;
  const final = [];
  for (let i = 0; i < len; i++) {
      let clone = arr.slice();
      clone.splice(i, 1);
      console.log(clone)
      final.push(clone.join("*"))
  }
  return final;
};

console.log(func(test));
// func(test);
