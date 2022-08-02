// Task - https://www.codewars.com/kata/582c297e56373f0426000098/train/javascript

function stringify(list) {
  return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`;
}
