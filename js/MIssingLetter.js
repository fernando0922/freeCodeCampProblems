function fearNotLetter(str) {
    let answer
    const start = str.charCodeAt(0)
    const end =  str.charCodeAt(str.length-1)
    for(let i = start ; i<= end ; i++){
        if(!(str.includes(String.fromCharCode(i)))){
            answer = String.fromCharCode(i)
            break
        }
    }
    return answer;
  }
  
  console.log(fearNotLetter("abce"))