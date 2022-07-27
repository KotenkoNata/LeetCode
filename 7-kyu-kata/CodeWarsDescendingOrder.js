// Task - https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {

  let array = n.toString().split('').map(item => Number(item));
  array.sort((a, b) => b - a);
  return Number(array.join(''));
}

console.log(descendingOrder(4801242))
// console.log(descendingOrder(814216))
// console.log(descendingOrder(1021)) //2110