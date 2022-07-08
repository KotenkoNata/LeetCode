// TAsk - https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  let sum = 0;
  let temp = n;

  while (temp > 0) {
    sum += Math.pow(temp % 10, temp.toString().length + p - 1);
    temp = Math.floor(temp / 10);
  }

  return (sum % n === 0) ? sum / n : -1;
}

console.log(digPow(92, 1)) //-1
console.log(digPow(46288, 3)) //51