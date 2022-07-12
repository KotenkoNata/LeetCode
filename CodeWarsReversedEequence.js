// TAsk - https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = n => {
  let result = [];

  for (let i = n; i >= 1; i--) {
    result.push(i)
  }
  return result;
};

console.log(reverseSeq(5)) //[5, 4, 3, 2, 1]
