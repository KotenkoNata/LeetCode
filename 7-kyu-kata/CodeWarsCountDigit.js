// Task - https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {

  let strOfSquare = ""

  let countD = 0;

  for (let i = 0; i <= n; i++) {
    strOfSquare = strOfSquare + i ** 2;
  }

  for (let k = 0; k <= strOfSquare.length - 1; k++) {

    if (strOfSquare[k] === d.toString()) {

      countD = countD + 1;
    }
  }
  return countD;
}

console.log(nbDig(10, 1));