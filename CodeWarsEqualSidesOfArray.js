// TAsk - https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  var sum = 0,
    leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];

    if (leftSum === sum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])) //3