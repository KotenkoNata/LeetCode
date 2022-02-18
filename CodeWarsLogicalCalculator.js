// Task - https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript


function logicalCalc(array, op) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (op === "AND") {
      result = result && array[i];
    }
    if (op === "OR") {
      result = result || array[i];
    }
    if (op === "XOR") {
      result = result !== array[i];
    }
  }
  return result;
}


// console.log(logicalCalc([true, false, false, false], "AND"))//, false);
// console.log(logicalCalc([true, true, true, false], "AND"))//false
// console.log(logicalCalc([true, true, false, false], "AND"))//false
// console.log(logicalCalc([true, false, false, false], "AND"))//false
// console.log(logicalCalc([false, false], "AND"))//false
// console.log(logicalCalc([false], "AND"))//false

// console.log(logicalCalc([true, true], "AND"))//true
// console.log(logicalCalc([true], "AND"))//true


// console.log(logicalCalc([true, true, true, false], "OR")) //true
console.log(logicalCalc([true, true, false, false], "OR"))//true
console.log(logicalCalc([true, false, false, false], "OR"))//true
// console.log(logicalCalc([true, true], "OR"))//true
// console.log(logicalCalc([true], "OR"))//true

// console.log(logicalCalc([false, false], "OR"))//, false)
// console.log(logicalCalc([false], "OR"))//false


