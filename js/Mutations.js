function mutation(arr) {
  let flag = true;

  for (const iterator of arr[1].toLowerCase()) {
    flag &&= arr[0].toLowerCase().includes(iterator);
  }

  return flag;
}

console.log(mutation(["hello", "Hello"]));
