// Task - https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript;

function solution(number) {
  let result = 0;

  if (number < 0) {
    return 0;
  }

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result = result + i;
      console.log(i);
    }
  }
  return result;
}


console.log(solution(10));//