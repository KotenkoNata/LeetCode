// Task - https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

function calculateYears(principal, interest, tax, desired) {
  if (desired === principal) {
    return 0;
  }

  let result = principal;

  let count = 0;

  while (result < desired) {
    result += Math.fround((result * interest) - (result * interest * tax));
    count++;
    console.log(result, count)
  }

  return count;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)) //3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)) //14