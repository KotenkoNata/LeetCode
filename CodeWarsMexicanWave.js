// Task - https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

function wave(str) {
  let result = [];

  let array = str.split('');

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
    result.push(array.join(''));
    array[i] = array[i].toLowerCase();
  }

  return result;
}

console.log(wave("hello"))

//["Hello", "hEllo", "heLlo", "helLo", "hellO"]