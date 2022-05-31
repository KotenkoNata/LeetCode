// TAsk - https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {

  if (!array) {
    return 0;
  }

  let sum = 0;


  const max = array.findIndex(element => {
    return element === Math.max(...array);
  })

  if (max !== -1) {
    array.splice(max, 1);
    console.log(array)
  }

  const min = array.findIndex(element => {
    return element === Math.min(...array);
  })
  if (min !== -1) {
    array.splice(min, 1);
    console.log(array, min)
  }

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum;
}

console.log(sumArray([-6, 20, -1, 10, -12]))

