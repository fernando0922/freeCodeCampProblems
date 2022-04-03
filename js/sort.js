const globalArray = [1, 30, 4, 21, 100000];

function nonMutatingSort(arr) {
  // Only change code below this line


  return [...arr].sort((a,b) => a-b)

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));