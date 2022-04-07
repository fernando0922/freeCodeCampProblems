function translatePigLatin(str) {
  let answer = "";

  if (/^[aeiou]/.test(str)) {
    answer = str + "way";
  } else {
    let end = "";

    for (const data of str) {
      if (/[^aeiou]/.test(data)) {
        end += data;
      } else {
        break;
      }
    }

    answer = str.substring(end.length) + end + "ay";
  }

  return answer;
}

console.log(translatePigLatin("consonant"));
