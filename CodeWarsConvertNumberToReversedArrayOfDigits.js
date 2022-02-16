// TAsk - https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  n = n.toString()

  let result = []

  for (let i = n.length - 1; i >= 0; i--) {
    result.push(parseInt(n[i]))
  }

  return result
}

console.log(digitize(35231))//,[1,3,2,5,3]