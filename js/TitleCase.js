function titleCase(str) {
  return str
    .split(" ")
    .map((a) => a[0].toUpperCase() + a.substring(1, a.length).toLowerCase())
    .join(" ")
}

console.log(titleCase("I'm a little tea pot"));
