// TAsk - https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5])) //, [1, 5]