// Task - https://www.codewars.com/kata/556deca17c58da83c00002db/solutions/javascript


function tribonacci(signature, n) {
  let arr = [...signature];
  for (let i = 0; i < n; i++) {
    arr.push(arr.slice(i, i + 3).reduce((acc, next) => acc + next, 0));
  }

  return arr.slice(0, -3);
}

console.log(tribonacci([1, 1, 1], 10)) //[1,1,1,3,5,9,17,31,57,105]
