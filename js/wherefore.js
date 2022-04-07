function whatIsInAName(collection, source) {
  let answer = [...collection];

  for (const data in source) {
    const key = data;

    const value = source[data];

    answer = answer.filter((a) => a.hasOwnProperty(key) && a[key] === value);
  }

  return answer;
}

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ],
    { apple: 1, bat: 2 }
  )
);
