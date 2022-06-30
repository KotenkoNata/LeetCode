// Task - https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2) {
  if (array1.length === 0 || array2.length === 0) {
    return false;
  }

  let count = 0;

  const length = array1.length;

  for (let i = 0; i < array1.length; i++) {

    console.log(`array2.indexOf(array1[i] * array1[i])`, array2.indexOf(array1[i] * array1[i]))

    if (array2.indexOf(array1[i] * array1[i]) !== -1) {
      array2.splice(array2.indexOf(array1[i] * array1[i]), 1);
      array1.splice(i, 1);
      count++;
      i--;
      console.log(array1, array2, i)
    }
  }
  console.log(count, length)
  return count === length;
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [231, 14641, 20736, 361, 25921, 361, 20736, 361])) //false

// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))//false