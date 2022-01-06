// Task - https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript

function findMissing(arr1, arr2) {

  arr1 = arr1.sort();
  arr2 = arr2.sort();

  let result;

  if (arr2.length === 0) {
    return result = arr1[0];
  }


  for (let i = 0; i <= arr1.length - 1; i++) {

    console.log(`arr1[i]`, arr1[i])

    if (arr2.length !== 0) {
      for (let k = 0; k <= arr2.length - 1; k++) {

        console.log(`arr2[k]`, arr2[k])

        if (arr1[i] === arr2[k]) {
          arr2.splice(k, 1);
          break;
        } else {
          result = arr1[i];
          console.log(result)
        }

      }

    } else {
      return result = arr1[i];
    }


  }

  return result;
}

// console.log(findMissing([1, 2, 3], [3, 1])) //2
// console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])) //8
// console.log(findMissing([7], [])) //7
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]))//3