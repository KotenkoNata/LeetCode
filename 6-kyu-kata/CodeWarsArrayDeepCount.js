// Task - https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

function deepCount(a) {
  let result = 0;

  if (a.length > 0 && Array.isArray(a)) {

    result = result + a.length;

    for (let i = 0; i < a.length; i++) {
      if (a[i].length > 0 && Array.isArray(a[i])) {
        result = result + deepCount(a[i]);
      }
    }

  } else result = 0;

  return result;
}


// console.log(deepCount([])); //, 0, "Expected 0"
// console.log(deepCount([1, 2, 3])) //, 3, "Expected 3"
console.log(deepCount(["x", "y", ["z"]]))//, 4, "Expected 4"
// console.log(deepCount([1, 2, [3, 4, [5]]])) //, 7, "Expected 7"
console.log(deepCount([[[[[[[[[]]]]]]]]])) //, 8, "Expected 8"
console.log(deepCount([0, 5, [[[[]], [[]], 16]]]))//expected 9 got 8