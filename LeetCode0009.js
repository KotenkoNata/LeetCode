//TASK https://leetcode.com/problems/palindrome-number/

const isPalindrome = function(x) {

  let result = x.toString().split('').reverse().join('');

  return (Number(result) === x) ? true : false;
};

console.log(isPalindrome(-121));