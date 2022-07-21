// Task - https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

function sumPairs(ints, s) {

  let result = []

  for (let i = 0; i < ints.length; i++) {

    let temp = s - ints[i];

    if (ints.indexOf(temp) !== -1 && ints.indexOf(temp) !== i) {

      if (result.length) {

        if (ints.lastIndexOf(result[1]) > ints.indexOf(temp) && ints.indexOf(temp) > i) {
          result.splice(0, 2, ints[i], ints[ints.indexOf(temp)]);
          break;

        }

      } else {
        result.push(ints[i], ints[ints.indexOf(temp)]);
        console.log(`result first push`, result, ints[i], ints[ints.indexOf(temp)])
      }

    } else {
      let obj = ints.filter((item, index) => {
        return item === temp
      })
      if (obj.length >= 2) {
        result.push(temp, ints[i])
        console.log(result)
      }

    }
  }
  return result.length > 1 ? result : undefined;
}

// console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)) //[1, 1]
//                         0   1  2  3  4  5
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)) //3,7

// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)) //[0, -6]

// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)) //1,7

// console.log(sumPairs([5, 9, 13, -3], 10)) //13,-3


function test(ints, s) {
  let seen = {};
  for (let i = 0; i < ints.length; i++) {
    if (seen[s - ints[i]]) {
      return [s - ints[i], ints[i]]
    }
    seen[ints[i]] = true;
    console.log(seen)
  }
}

console.log(test([5, 9, 13, -3], 10)) //13,-3