// Task - https://www.codewars.com/kata/52f3bb2095d6bfeac2002196/train/javascript

const validWord = function (dictionary, word) {
  let reg = new RegExp('^(' + dictionary.join('|') + ')+$');
  return reg.test(word);
};

// console.log(validWord(['code', 'wars'], 'codewars'));//,true]
// console.log(validWord(['code', 'star', 'wars'], 'starwars')); //true;
// console.log(validWord(['code', 'wars'], 'codecodewars'))//true;
// console.log(validWord(['code', 'wars'], 'codewarscode'))//true
// console.log(validWord(['Star', 'Code', 'Wars'], 'CodeStarsWar'))//false
console.log(validWord(['ab', 'a', 'bc'], 'abc'))//, true
// console.log(validWord(['code', 'wars'], 'codewar'))//, false]
