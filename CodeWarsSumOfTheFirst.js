function SeriesSum(n) {
  let sum = 0;
  let del = 1;
  while (n > 0) {
    sum = sum + 1 / del;
    del = del + 3;
    n = n - 1;
  }
  return sum.toFixed(2).toString()
}

console.log(SeriesSum(3))//, "1.39 "