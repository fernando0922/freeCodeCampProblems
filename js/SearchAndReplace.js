function myReplace(str, before, after) {
    const flag = /^[A-Z]/.test(before)
    after = flag ? after[0].toUpperCase()+after.substring(1).toLowerCase(): after.toLowerCase()
    return str.replace(before,after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");