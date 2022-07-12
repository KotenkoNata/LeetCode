// Task - https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

function index(array, n) {
  if (array.length - 1 - n < 0) return -1
  return Math.pow(array[n], n);
}

console.log(index([1, 3, 10, 100], 3)) //1000000

console.log(index([2, 3, 5], 2)) //1000