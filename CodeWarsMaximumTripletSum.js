// Task - https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript

function maxTriSum(numbers) {

  let set = new Set(numbers);

  numbers = [...set];

  console.log(numbers)

  let sum = 0;


  for (let i = 0; i < 3; i++) {

    let maxNum = Math.max.apply(Math, numbers);

    maxNum = Math.max.apply(Math, numbers);

    console.log(`maxNum`, maxNum);

    sum = sum + maxNum;

    let forSliceIndex = numbers.findIndex(item => item === maxNum);

    console.log(`forSliceIndex`, forSliceIndex)

    numbers.splice(forSliceIndex, 1);

    console.log(`numbers after splice`, numbers)

  }

  return sum;
}

// console.log(maxTriSum([3, 2, 6, 8, 2, 3]))//17
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]))//18
