function diffArray(arr1, arr2) {
  const arr1Toarr2 = arr1.filter((a) => arr2.indexOf(a) < 0);
  const arr2Toarr1 = arr2.filter((a) => arr1.indexOf(a) < 0);
  return [...arr1Toarr2, ...arr2Toarr1];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
