// Task - https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr, n) {
  arr.map(element => {
    let filter = arr.filter(item => {
      return item === element;
    })
    if (filter.length > n) {
      let index = filter.length - n;
      while (index > 0) {
        arr.splice(arr.lastIndexOf(filter[0]), 1);
        index--;
      }

    }
  })

  return arr;
}

console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)) //[1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([43,
  8,
  8,
  8,
  41,
  8,
  8,
  9,
  11,
  9,
  43,
  8,
  41,
  43,
  8,
  41,
  9,
  43,
  9,
  8,
  41,
  6,
  41,
  8,
  41,
  9,
  8,
  9,
  9,
  25,
  41,
  6,
  43,
  43,
  41,
  41], 2)) ///[43, 8, 8, 41, 9, 11, 9, 43, 41, 6, 25, 6]