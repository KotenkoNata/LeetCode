// Task - https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {

  if (words.length === 0) {
    return ""
  }
  let array = words.split(' ');
  let result = {};

  array.forEach(el => {
    let number = el.match(/[0-9]/gi);
    result[number[0]] = el;
  })

  return Object.values(result).join(' ').trim()
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2")) //, "Fo1r the2 g3ood 4of th5e pe6ople"