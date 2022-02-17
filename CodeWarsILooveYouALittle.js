// Task -https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
  let petal = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

  let result;

  let ost = nbPetals % 6;

  console.log(ost)

  if (ost === 0) {
    result = petal[5]
  } else {
    result = petal[ost - 1];
  }

  console.log(result)

  return result;
}


// console.log(howMuchILoveYou(7))//,"I love you"
console.log(howMuchILoveYou(138))//'not at all'