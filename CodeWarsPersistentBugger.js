// Task - https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let result = num.toString();
  let a = 1;
  let count = 0;

  if (result.length === 1) {
    return 0;
  }

  while (result.length !== 1) {
    for (let i = 0; i < result.length; i++) {
      a = a * parseInt(result[i]);
    }

    result = a;
    a = 1;
    result = result.toString();
    count += 1;
  }
  return count;
}

console.log(persistence(39)) //4
console.log(persistence(4))//2