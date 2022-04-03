function chunkArrayInGroups(arr, size) {
  let answer = [];
  let temp = [];
  for (const data of arr) {
    if (temp.length === size) {
      answer.push(temp);
      temp = [];
    }
    temp.push(data);
  }

  if (temp.length) {
    answer.push(temp);
  }
  return answer;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
