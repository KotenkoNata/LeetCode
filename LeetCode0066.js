//Task https://leetcode.com/problems/plus-one/

const plusOne = function (digits) {

  let value = 0;
  let plus = 1;

  for (let i = digits.length - 1; i >= 0 && plus; i--) {
    value = digits[i] + plus;
    plus = Math.floor(value / 10);
    digits[i] = value % 10;
  }
  if(plus){
    digits.unshift(plus);
  }
  return digits;
};

// console.log(plusOne([1,9,9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))///[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]