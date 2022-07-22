// Task - https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {

  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let result = 0;

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}

console.log(getSum(-1, 2))