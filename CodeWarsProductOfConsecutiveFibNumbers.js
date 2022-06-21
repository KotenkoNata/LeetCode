// Task - https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

function productFib(prod) {
  let n = 0;
  let next = 1;

  while (n * next < prod) {
    next = n + next;
    n = next - n;
  }

  return [n, next, n * next === prod]
}

console.log(productFib(4895));
