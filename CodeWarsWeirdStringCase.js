// Task - https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(str) {
  let result = '';
  let strSplit = str.split(' ');

  for (let i = 0; i < strSplit.length; i++) {
    for (let j = 0; j < strSplit[i].length; j++) {
      if (j % 2 === 0) {
        result = result + strSplit[i][j].toUpperCase();
      } else {
        result = result + strSplit[i][j];
      }
    }
    result = result + " ";
  }
  return result;
}

console.log(toWeirdCase('This'));  //, 'ThIs');
console.log(toWeirdCase('is'));  //, 'Is');

console.log(toWeirdCase('This is a test')); //'ThIs Is A TeSt'