// Task - https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript

function leastLarger(a, i) {
  const target = a[i];
  const arrayLargerValue = a.filter(item => item > target);
  const min = Math.min(...arrayLargerValue);

  return a.findIndex(item => item === min)
}

// console.log(leastLarger([9, 6, 3, -8, -1, 9, 0,
//   -5, -1, -5, 1, -3, -5, 2,
//   -6, -4, 4, -2, -4], 1)) //[0,5]
//
// console.log(leastLarger([1, 3, 5, 2, 4], 0)) //3

// console.log(leastLarger([
//   0, -5, -6, -1,
//   -9, 8, 7, 9
// ], 7)) //-1

console.log(leastLarger([
  2, 4, -1, 6, -1, 8, 2,
  -6, 5, -6, 0, -4, -1, 8,
  -2, -4, 6, 9, 1, -6
], 12)) //10

console.log(leastLarger([
  9, 1, 5, 8, -2, -9,
  -4, -4, 3, 6, 6, 5,
  7
], 11)) //[9, 10]