function invert(array) {
  let result = [];

  array.forEach(item => {
    if (item >= 0) {
      result.push(-item);
    } else {
      result.push(Math.abs(item));
    }
  })
  return result;
}

console.log(invert([]))