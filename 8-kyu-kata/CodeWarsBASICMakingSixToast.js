// TAsk - https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/train/javascript

function sixToast(num) {

  let result = 0;

  if (num > 6) {
    result = num - 6;
  } else if (num < 6) {
    result = 6 - num;
  }
  return result;
}

console.log(sixToast(17))