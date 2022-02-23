// TAsk - https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3/train/javascript

Array.prototype.reduce = function (callBack, initialValue) {
  let accumulator;
  let index;
  // check if array is empty and default value
  if (initialValue !== undefined) {
    accumulator = initialValue;
    index = 0;
  }
  // if default value is exist, accumulator = default value
  if (initialValue === undefined) {
    //if default value doesn't exist
    accumulator = this[0];
    index = 1;
  }

  // use loop for iteration through the array and use callback
  for (; index < this.length; index++) {
    accumulator = callBack(accumulator, this[index], index, this);
  }
  return accumulator;
}

console.log(['a', 'y', '!'].reduce(function (x, y) {
  return x + y
}, 'y'))//'yay!')

console.log([1, 2, 3].reduce(function (sum, next) {
  return sum + next
}, 0))//6

