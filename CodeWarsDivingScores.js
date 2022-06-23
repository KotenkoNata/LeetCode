// Task - https://www.codewars.com/kata/5c97be7d856e611dbb78805f/train/javascript

function scoreOfDive(scores, tariff) {

  while (scores.length > 3) {
    let min = Math.min(...scores);
    scores.splice(scores.indexOf(min), 1);

    let max = Math.max(...scores);
    scores.splice(scores.indexOf(max), 1);
  }

  const sum = scores.reduce((s, a) => s + a, 0);

  return ((sum * tariff).toFixed(2)).toString()
}

console.log(scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3)) //'64.50'