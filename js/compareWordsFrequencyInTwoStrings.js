function mutation(arr) {
  let map1 = new Map();
  let map2 = new Map();

  for (const a of arr[0].toLowerCase()) {
    if (map1.has(a)) {
      map1.set(a, map1.get(a) + 1);
    } else {
      map1.set(a, 1);
    }
  }

  for (const a of arr[1].toLowerCase()) {
    if (map2.has(a)) {
      map2.set(a, map2.get(a) + 1);
    } else {
      map2.set(a, 1);
    }
  }

  let flag = true;

  for (const data of map1) {
    let key = data[0];
    let value = data[1];
    if (map2.has(key) && map2.get(key) === value) {
      flag &&= true;
    } else {
      flag &&= false;
      break;
    }
  }

  return flag;
}

console.log(mutation(["hello", "hello"]));
