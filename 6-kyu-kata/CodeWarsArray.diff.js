// Task - https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {

  b.forEach(item => {
    while (a.findIndex(element => element === item) >= 0) {
      let index = a.findIndex(element => element === item);
      a.splice(index, 1)
    }

  })

  return a;
}

console.log(arrayDiff([1, 2], [1])) //[2]