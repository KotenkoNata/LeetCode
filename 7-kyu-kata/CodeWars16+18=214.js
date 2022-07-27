//TASK - https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

function add(num1, num2) {
  let result = '';

  while (num1 || num2) {
    result = (num1 % 10) + (num2 % 10) + result;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }
  return +result;
}

// console.log(add(16, 18));//214
// console.log(add(2, 11));//214
console.log(add(122, 81)); //1103
