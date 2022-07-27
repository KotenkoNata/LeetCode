// TAsk - https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

function stringClean(s) {
  let array = s.match(/[^0-9]/gi);
  return array ? array.join('') : '';
}

console.log(stringClean("(E3at m2e2!!)")) //"(Eat me!!)"
console.log(stringClean("123456789"))