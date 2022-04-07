function destroyer(...arr) {
  const [data, ...destroyArray] = arr;
  return data.filter((a) => destroyArray.indexOf(a) < 0);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
