// Task - https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

const humanYearsCatYearsDogYears = function (humanYears) {
  const result = [];
  result[0] = humanYears;
  result[1] = 0;
  result[2] = 0;

  console.log(result)
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      result[1] += 15;
      result[2] += 15;

      console.log(result[1])
    } else if (i === 2) {
      result[1] += 9;
      result[2] += 9;
    } else {
      result[1] += 4;
      result[2] += 5;
    }

  }
  return result;
}

console.log(humanYearsCatYearsDogYears(2)) //1,15,15