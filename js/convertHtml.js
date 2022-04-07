function convertHTML(str) {
  return [...str]
    .map((a) =>
      a === "&"
        ? "&amp;"
        : a === "<"
        ? "&lt;"
        : a === ">"
        ? "&gt;"
        : a === '"'
        ? "&quot;"
        : a === "'"
        ? "&apos;"
        : a
    )
    .join("");
}

convertHTML("Dolce & Gabbana");
