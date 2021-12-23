//Task https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

const firstPalindrome = function(words) {
  let result = '';

  for (let i=0; i<= words.length-1; i++) {

    if(words[i]===words[i].split('').reverse().join('')){
      return result = words[i]
    }
  }
  return result;
};