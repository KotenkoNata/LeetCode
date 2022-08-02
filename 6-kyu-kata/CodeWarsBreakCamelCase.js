// Task - https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    let lowerCaseString = string.toLowerCase();

    if (lowerCaseString.charCodeAt(i) !== string.charCodeAt(i)) {
      result += ' ';
    }
    result += string[i];
  }
  return result
}

console.log(solution('camelCasing')) //'camel Casing', 'Unexpected result'