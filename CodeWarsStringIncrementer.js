// Task - https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(strng) {
  let result = '';

  if (strng.charCodeAt(strng.length - 1) >= 48 && strng.charCodeAt(strng.length - 1) <= 57) {
    let number = '';
    for (let i = 0; i < strng.length; i++) {
      if (strng.charCodeAt(i) >= 48 && strng.charCodeAt(i) <= 57) {
        number += strng[i]
      }
    }
    let array = strng.split(number[0]);
    result = array[0];

    if ((+number + 1).toString().length < number.length) {
      let nullNumber = number.length - ((+number + 1).toString().length);
      console.log(nullNumber)

      for (let j = 0; j < nullNumber; j++) {
        result += '0';
      }
      result += (+number + 1).toString()
    } else {
      result += (+number + 1).toString()
    }

  } else {
    return strng + 1;
  }

  return result;
}

console.log(incrementString("foobar099")) //"foobar001"