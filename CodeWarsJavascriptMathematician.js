// Task - https://www.codewars.com/kata/55c211cce1ef691d9b000061/train/javascript


const calculate = (...args1) => (...args2) => {
  return [].concat(args1, args2).reduce((a, b) => a + b, 0)
}

// console.log(calculate(1)(1))//2

console.log(calculate(1, 1)(1))//3