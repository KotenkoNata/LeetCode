// TAsk - https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit) {
  let result = a.filter(element => {
    return element <= limit;
  })

  return result.length === a.length
}

console.log(smallEnough([66, 101], 200))
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));

console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))