// Task - https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  return !((flower1 % 2 !== 0 && flower2 % 2 !== 0) || (flower1 % 2 === 0 && flower2 % 2 === 0))
}

console.log(lovefunc(1, 4)) //true
console.log(lovefunc(2, 2)) //false
