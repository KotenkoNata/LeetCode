// Task - https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

function getLengthOfMissingArray(arrayOfArrays) {

  const ArrayLengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)

  if (ArrayLengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < ArrayLengths.length - 1; i++) {
    if (ArrayLengths[i] + 1 !== ArrayLengths[i + 1]) {
      return ArrayLengths[i] + 1
    }
  }

  return 0
}

// console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1, 5, 6], [1, 1], [5, 6, 7, 8, 9]]))//4

// console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))//3

// console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))//2

// console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))///3

// console.log(getLengthOfMissingArray(null))//0

console.log(getLengthOfMissingArray([[], [1, 2, 2]])) ///0

// console.log(getLengthOfMissingArray([[3, 0, 2],
//   [0, 0, 0, 0],
//   [4, 0, 0, 2, 3, 3, 4, 4],
//   [0, 4, 2, 3, 2, 1, 1],
//   [1, 4, 2, 4, 1, 3, 4, 2, 1],
//   [3, 2, 3, 1, 2, 1]]))//5


