// TAsk - https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  let multiple = 10;
  let result = [];
  while (num > 0) {
    let remainder = num % multiple;
    console.log(`remainder`, remainder);
    if (remainder > 0) {
      result.unshift(remainder);
      console.log(result)
    }
    num -= remainder;
    console.log(`num`, num)
    multiple *= 10;
  }
  console.log(`result - sdfsdf`, result);
  return result.join(" + ");
}

console.log(expandedForm(expandedForm(125))) //'10 + 2'

console.log(expandedForm(expandedForm(42))) //, '70000 + 300 + 4'