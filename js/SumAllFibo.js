function sumFibs(num) {
  let num1 = 1;
  let num2 = 1;
  let sum = 2;

  for (let i = 2; i < num; i++) {
    let temp = num2;
    num2 += num1;
    num1 = temp;
    if (num2 % 2 === 1) {
        if(num2<=num){
            sum+=num2
        }else{
            break
        }
    }
  }

  return sum;
}

console.log(sumFibs(4));
console.log(sumFibs(10));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
