// Task - https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  let result = {};
  let array = string.split('');

  array.forEach(element => {
    let letterArray = array.filter((item, index) => item === element);
    result[element] = letterArray.length;
  })

  return result;
}

console.log(count("aba")) //{ a: 2, b: 1 }