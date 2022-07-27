// Task - https://www.codewars.com/kata/54e6533c92449cc251001667

const uniqueInOrder = function (iterable) {
  let result = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }

  return result;
}

// console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A','B','C','D','A','B']

console.log(uniqueInOrder([1, 2, 3, 3])) //[ 1, 2, 3 ]