// Task - https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {

  let array = [r, g, b];

  let result = '';

  for (let i = 0; i < array.length; i++) {

    if (array[i] > 255) {
      array[i] = 255;
    } else if (array[i] < 0) {
      array[i] = 0;
    }

    let hex = array[i].toString(16);

    hex = (hex.length === 1) ? "0" + hex : hex

    result = result + hex.toUpperCase();
  }
  return result;
}

console.log(rgb(0, 0, 0)) // , '000000')
console.log(rgb(0, 0, -20)) //, '000000')
console.log(rgb(300, 255, 255)) //, 'FFFFFF')
console.log(rgb(173, 255, 47)) //, 'ADFF2F'))