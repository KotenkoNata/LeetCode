// Task - https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript

function head(array) {
  return array[0];
}

function tail(array) {
  return array.slice(1);
}

function init(array) {
  return array.slice(0, -1);
}

function last(array) {
  return array[array.length - 1];
}

console.log(head([5, 1]))//, 5 );
console.log(tail([1]))//, [] );
console.log(init([1, 5, 7, 9]))//, [1,5,7] );
console.log(last([7, 2]))//, 2 );