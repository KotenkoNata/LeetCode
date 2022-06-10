// Task - https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  let result = str.split("").reverse().join("").split(' ').reverse().join(" ");
  return result;
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
//'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple'))
console.log(reverseWords('a b c d'))
console.log(reverseWords('double  spaced  words'))