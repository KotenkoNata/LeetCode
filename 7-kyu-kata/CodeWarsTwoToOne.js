// Task - https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  let array = s1.split('').concat(s2.split(''));
  array.sort();
  let result = [...new Set(array)].join('')
  return result;
}

console.log(longest("aretheyhere", "yestheyarehere")) //"aehrsty"