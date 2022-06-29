// TAsk - https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
  let arrayReverse = x.split('').reverse().join('').toLowerCase();
  return x.toLowerCase() === arrayReverse;
}

console.log(isPalindrome("Abba")) //true