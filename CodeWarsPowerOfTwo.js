// Task - https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript

function isPowerOfTwo(n){
  if(n === 0) return false;

  while(n % 2 === 0){
    n = n/2
  }
  return n === 1
}

console.log(isPowerOfTwo(2))//true
console.log(isPowerOfTwo(4096))//true
console.log(isPowerOfTwo(5))//false
console.log(isPowerOfTwo(536870912))//true