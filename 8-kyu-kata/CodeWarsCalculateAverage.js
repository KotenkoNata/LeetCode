// Task - https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((average, value) => {
    return average + value;
  }, 0) / array.length;
}

console.log(find_average([19, 52, 83, 45, 7, 46, 27, 1, 63, 55, 82])) //2.5