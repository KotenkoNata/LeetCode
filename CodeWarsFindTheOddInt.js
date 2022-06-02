// TAsk - https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {

  for (let i = 0; i < A.length; i++) {
    let array = A.filter(item => {
      if (item == A[i]) {
        return item;
      }
    })

    if (array.length % 2 !== 0) {
      return A[i];
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) //5