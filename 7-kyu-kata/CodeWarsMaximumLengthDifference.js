// Task - https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
  let result = [];

  if (a1.length === 0) {
    return -1;
  }
  if (a2.length === 0) {
    return -1;
  }

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      result.push(Math.abs(a1[i].length - a2[j].length));
    }
  }
  return Math.max(...result);
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

console.log(mxdiflg(['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'], []));