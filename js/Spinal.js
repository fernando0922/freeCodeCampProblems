function spinalCase(str) {
  const data = [...str]
    .map((a) => (/[A-Z]/.test(a) ? "-" + a : a))
    .join("")
    .replace(/ -/g, "-")
    .replace(/[_]+/g, "")
    .replace(/[ ]/,"-")
    .toLowerCase();

  return data[0] === "-" ? data.substring(1) : data;
}

console.log(spinalCase("Teletubbies say Eh-oh"));
