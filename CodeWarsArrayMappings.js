// Task - https://www.codewars.com/kata/56e20642ddeb0f4fac000344/train/javascript

Array.prototype.map = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}

console.log([1, 2, 3].map(x => x ** 2))