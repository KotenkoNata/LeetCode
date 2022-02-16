// Task - https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let result = false;

  if (enteredCode === correctCode) {
    if (Date.parse(currentDate) < Date.parse(expirationDate)) {
      result = true;
    }
  }

  return result;
}


console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));//, true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'));//, false