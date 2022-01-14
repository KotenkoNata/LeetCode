// Task - https://leetcode.com/problems/valid-parentheses/

function isValid(s) {
   let bracketsType = "()[]{}";

   let storageForClosingBrackets = [];

   for(let i = 0; i <= s.length - 1; i++){
     let indexOfOpenBracket = bracketsType.indexOf(s[i]);

     console.log(`indexOfOpenBracket`,indexOfOpenBracket)

     if(indexOfOpenBracket % 2 === 0){
       storageForClosingBrackets.push(indexOfOpenBracket + 1);
       console.log(`storageForClosingBrackets`,storageForClosingBrackets)
     }else{
       console.log(`index`,indexOfOpenBracket)
       if(storageForClosingBrackets.pop() !== indexOfOpenBracket){
         console.log(`result.pop()`,storageForClosingBrackets.pop())
         console.log(`storageForClosingBrackets.pop() !== indexOfOpenBracket`,storageForClosingBrackets.pop() !== indexOfOpenBracket)
         return false;
       }

     }
   }
console.log(`storageForClosingBrackets`,storageForClosingBrackets.length === 0)
return storageForClosingBrackets.length === 0;
}

// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false