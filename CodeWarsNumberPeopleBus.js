// Task - https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascrip

const number = function (busStops) {

  let sumGet = 0;
  let sumOff = 0;

  busStops.forEach(elements => {
    sumGet = sumGet + elements[0];
    sumOff = sumOff + elements[1];
  })

  return sumGet - sumOff;
}

console.log(number([[10, 0], [3, 5], [5, 8]])) //5