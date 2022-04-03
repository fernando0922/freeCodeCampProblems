function findLongestWordLength(str) {
    let answer = 0;
    str.split(" ").forEach(a=>{
        if(a.length > answer){
            answer = a.length
        }
    })
    return answer;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");