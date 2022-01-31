// Task - https://leetcode.com/problems/roman-to-integer/

const romanToInt = function (s) {

  let result = 0;

  let roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  for (let i = 0; i < s.length; i++) {
    const curr = roman[s[i]];
    const next = roman[s[i + 1]];
    (curr < next) ? (result -= curr) : (result += curr);
  }
  return result
};

console.log(romanToInt("III")) //3
console.log(romanToInt("LVIII")) //58 L = 50, V= 5, III = 3.
console.log(romanToInt("MCMXCIV")) //1994 M = 1000, CM = 900, XC = 90 and IV = 4.