// TAsk - https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

const isAnagram = function (test, original) {

  let array = original.toLowerCase().split('');

  test = test.toLowerCase();

  if (test.length !== original.length) {
    return false;
  }

  for (let i = 0; i < test.length; i++) {

    if (array.indexOf(test[i]) !== -1) {
      array.splice(array.indexOf(test[i]), 1);
    } else if (array.indexOf(test[i]) === -1) {
      return false;
    }
  }

  return array.length === 0
};

console.log(isAnagram("Twoo", "WooT")) //false