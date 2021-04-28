const test = [4, 2, 5, 12, 5, 3, 1];

const ret = (arr) => {
  const tmp = [];
  for (let i = 0; i < test.length; i++) {
    if (tmp.includes(test[i])) {
        return test[i];
    }
    tmp.push(test[i]);
  }
};

console.log(ret(test))

const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}

let unique = test.filter(onlyUnique);

console.log(unique)