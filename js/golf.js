const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  let answer = ""

  if(strokes===1){
    answer = names[0]
  }else if(strokes <= par - 2){
    answer = names[1]
  }else if(strokes === par - 1){
    answer = names[2]
  }else if(strokes === par){
    answer = names[3]
  }else if(strokes === par + 1){
    answer = names[4]
  }else if(strokes === par + 2){
    answer = names[5]
  }else{
    answer = names[6]
  }

  return answer;
  // Only change code above this line
}

console.log(golfScore(4, 3));