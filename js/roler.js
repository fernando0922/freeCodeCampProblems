function steamrollArray(arr) {
  return String(arr)
    .replace(/[,]{2}/g, ",")
    .split(",")
    .map((a) =>
      a == "[object Object]" ? {} : /[a-z]/.test(a) ? a : Number(a)
    );
}

console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[[["a"]], [["b"]]]]));
