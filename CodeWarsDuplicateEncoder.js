// Task - https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  let wordObject = {};
  word.toLowerCase().split('').forEach(function (letter) {

    console.log(`letter`, letter)
    if (wordObject.hasOwnProperty(letter)) {
      wordObject[letter]++;
      console.log(wordObject[letter])
    } else {
      wordObject[letter] = 1;
      console.log(wordObject[letter])
    }
  });
  word = word.toLowerCase().split('').map(function (letter) {
    if (wordObject[letter] > 1) {
      return ')';
    } else {
      return '(';
    }
  }).join('');
  return word;
}


console.log(duplicateEncode("recede"))///,"()()()"