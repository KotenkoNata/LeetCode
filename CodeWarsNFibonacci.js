// Task - https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

function nthFibo(n) {

  let result;

  for (let i = 0; i < n; i++) {
    result = fib(i)
  }
  return result;
}

let fib = function (n) {

  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2)
};


// console.log(nthFibo(1))//0,"1-st Fibo

// console.log(nthFibo(2))//1,"2-nd Fibo");

// console.log(nthFibo(3))//1,"3-rd Fibo");

console.log(nthFibo(4))//2,"4-th Fibo");