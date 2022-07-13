// Task - https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((sum, value) => {
    return sum = sum + value;
  }, 0) / classPoints.length;

  console.log(average)
  return yourPoints > average;
}

console.log(betterThanAverage([2, 3], 5)) //true