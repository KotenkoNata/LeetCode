// Task - https://www.codewars.com/kata/584dc1b7766c2bb158000226/train/javascript

function choreAssignment(chores) {
  let result = [];

  while (chores.length > 0) {
    let min = Math.min(...chores);
    let max = Math.max(...chores);
    result.push(min + max);
    chores.splice(chores.indexOf(min), 1);
    chores.splice(chores.indexOf(max), 1);
  }
  return result.sort((a, b) => a - b);
}

console.log(choreAssignment([5, 2, 1, 6, 4, 4])) //[7, 7, 8] sum 22 - 7 = 15
console.log(choreAssignment([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9])) //[7, 8, 8, 10, 10, 11]