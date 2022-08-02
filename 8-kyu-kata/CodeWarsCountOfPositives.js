// Task - https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {

  if (input === null || input.length < 1) {
    return []
  }

  let posSum = 0;
  let negSum = 0;

  let result = [];

  for (let i = 0; i < input.length; i++) {

    if (input[i] > 0) {

      posSum = posSum + 1;

    } else {

      negSum = negSum + input[i];

    }
  }

  result.push(posSum, negSum)

  return result;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))//[10, -65]

console.log(countPositivesSumNegatives(null))