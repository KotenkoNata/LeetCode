// Task - https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  let array = x.split(' ');
  let count = 0;
  let max = [];

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array[i].length; j++) {
      count = count + (array[i].charCodeAt(j) - 96);
      console.log(`array[i][j]`, array[i][j], `array[i][j].charCodeAt(j)`, array[i].charCodeAt(j))
    }
    max.push(count);
    count = 0;
  }

  let index = max.indexOf(Math.max(...max));

  return array[index].toString();
}

console.log(high('man i need a taxi up to ubud')) //'taxi'