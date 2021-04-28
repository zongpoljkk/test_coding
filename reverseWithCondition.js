

const test = "ab-c-def-g"

const revWithCondition = (str) => {
  let temp = str.split("-")
//   console.log(temp)
  let rev = temp.join("")

  rev = rev.split("").reverse().join("");
//   console.log(rev)
  const final = []
  let j = 0
  for (var i = 0; i < temp.length; i++) {
    // console.log(temp[i])
    final.push(rev.slice(j, j+temp[i].length));
    // console.log(j)
    j += temp[i].length
    // console.log(final)
    // j += temp[i].length
  }
//   console.log(final)
  console.log(final.join("-"))
}

revWithCondition(test)