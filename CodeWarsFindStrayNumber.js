// Task = https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
  let result = numbers[0];

  if (result !== numbers[1] && result !== numbers[2]) {
    return result;
  }

  for (let i = 1; i < numbers.length; i++) {
    if (result !== numbers[i]) {
      result = numbers[i];
      break;
    }
  }

  return result;
}

console.log(stray([1, 1, 1, 1, 5, 1, 1])) //8