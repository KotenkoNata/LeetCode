// TAsk - https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {

  const str = num.toString();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]) ** 2;
  }

  return +result;
}

console.log(squareDigits(3212)) //9414