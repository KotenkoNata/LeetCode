// Task - https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5
}

console.log(roundToNext5(21)) //25

console.log(roundToNext5(555)) //555

console.log(roundToNext5(0)) //0

console.log(roundToNext5(-5)) //-5