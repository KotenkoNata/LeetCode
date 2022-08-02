// Task - https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/javascript

function getCard() {

  let result = [];

  let letter = ["B", "I", "N", "G", "O"];

  let j = 0

  for (let k = 0; k < letter.length; k++) {


    let min = Math.ceil(j);

    let max = Math.floor(j + 15);

    console.log(min, max)

    let i = 5;

    if (letter[k] === "N") {
      i = 4;
    }

    while (i > 0) {
      i = i - 1;
      let randomNumber = (Math.floor(Math.random() * (max - min)) + min);
      let element = letter[k] + randomNumber;


      if (result.includes(element)) {
        i = i + 1;
      } else {
        result.push(element)
      }

    }
    j = j + 15;
  }

  return result;
}

console.log(getCard())