// Task - https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  let result = arr[0];

  if (result !== arr[1] && result !== arr[2]) {
    return result;
  }

  for (let i = 1; i < arr.length; i++) {
    if (result !== arr[i]) {
      result = arr[i];
      break;
    }
  }

  return result;
}

console.log(findUniq([1, 1, 1, 2, 1, 1])) //2