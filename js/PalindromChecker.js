function palindrome(str) {
  str = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .replace(/[ ]+/g, "");

  return str === [...str].reverse().join("");
}

console.log(palindrome("eye"));
