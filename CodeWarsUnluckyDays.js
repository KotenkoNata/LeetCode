// Task - https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript

function unluckyDays(year) {
  let result = 0;

  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) {
      result = result + 1;
    }
  }

  return result;
}

console.log(unluckyDays(1586))//"should be: 1";
console.log(unluckyDays(2132))//1