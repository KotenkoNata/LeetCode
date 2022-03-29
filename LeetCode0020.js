// Task - https://leetcode.com/problems/valid-parentheses/

function isValid(s) {
  let bracketsType = "()[]{}";
  let storageForClosingBrackets = [];
  for (let i = 0; i <= s.length - 1; i++) {
    let indexOfOpenBracket = bracketsType.indexOf(s[i]);
    if (indexOfOpenBracket % 2 === 0) {
      storageForClosingBrackets.push(indexOfOpenBracket + 1);
    } else {
      if (storageForClosingBrackets.pop() !== indexOfOpenBracket) {
        return false;
      }

    }
  }
  return storageForClosingBrackets.length === 0;
}

// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false