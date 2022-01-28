// Task - https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

const countBits = function (n) {

  let nBinary = n.toString(2);
  let result = 0;

  nBinary = nBinary.split('');

  nBinary.map(item => {
    if (item === "1") {
      result = result + 1;
    }
  })

  return result;
};

console.log(countBits(0))//0
console.log(countBits(4))//1
console.log(countBits(7))//3