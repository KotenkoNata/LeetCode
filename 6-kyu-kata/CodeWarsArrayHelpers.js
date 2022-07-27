// Task - https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

Array.prototype.square = function () {
  return this.map(item => item * item);
}

Array.prototype.cube = function () {
  return this.map(item => Math.pow(item, 3));
}

Array.prototype.average = function () {
  let sum = 0;
  this.map(item => sum += item);
  return this.length === 0 ? NaN : sum / this.length;
}

Array.prototype.sum = function () {
  let sum = 0;
  this.map(item => sum += item);
  return sum;
}

Array.prototype.even = function () {
  return this.filter(item => item % 2 === 0);
}

Array.prototype.odd = function () {
  return this.filter(item => item % 2 !== 0);
}


let numbers = [1, 2, 3, 4, 5];

console.log(numbers.odd())