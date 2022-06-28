// Task - https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
  let result = [];

  for (let i = a; i <= b; i++) {
    let count = 0;
    let array = i.toString().split('');
    for (let j = 0; j < array.length; j++) {
      count += array[j] ** (j + 1);
    }
    if (count === i) {
      result.push(i);
    }
  }

  return result;
}

console.log(sumDigPow(1, 100)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]