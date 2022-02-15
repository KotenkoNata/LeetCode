// Task - https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

function sortByBit(arr) {
  let steps = arr.length - 1;
  let swapped;

  function binary(num) {
    let binCurr = num.toString(2);
    let countBit = 0;

    for (let j = 0; j < binCurr.length; j++) {
      if (binCurr[j] === "1") {
        countBit = countBit + 1;
      }
    }
    return countBit;
  }

  do {
    swapped = false;
    for (let i = 0; i < steps; i += 1) {

      if (binary(arr[i]) > binary(arr[i + 1])) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      } else if (binary(arr[i]) === binary(arr[i + 1])) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    }
    steps -= 1;
  } while (swapped);
  return arr;
}


console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));//[1, 8, 3, 3, 5, 6, 9, 7]
console.log(sortByBit([1, 8, 3, 3, 5, 6, 9, 7]));
console.log(sortByBit([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]));
console.log(sortByBit([0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]));