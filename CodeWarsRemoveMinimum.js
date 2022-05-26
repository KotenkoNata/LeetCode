// Task - https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

function removeSmallest(numbers) {
  let result = [];

  let minValue = Math.min(...numbers);
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === minValue && count === 0) {
      count = count + 1;
      console.log(count)
    } else if (numbers[i] !== minValue) {
      result.push(numbers[i]);
      console.log(result)
    } else if (numbers[i] === minValue && count >= 1) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(removeSmallest([2, 2, 1, 2, 1]))
