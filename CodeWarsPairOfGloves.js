// Task - https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

function numberOfPairs(gloves) {
  let pairs = 0;
  let sortArr = gloves.slice().sort()

  for (let i = 1; i < sortArr.length; i++) {
    if (sortArr[i - 1] === sortArr[i]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}

console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])) //3