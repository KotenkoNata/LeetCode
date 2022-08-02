// Task - https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }
  while (n-- > 0) {
    let resEv = '';
    let resOdd = '';
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        resEv += text[i]
      } else {
        resOdd += text[i];
      }
    }
    text = resOdd + resEv;
  }
  return text;
}


function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) {
    return encryptedText;
  }
  const result = new Array(encryptedText.length);
  while (n-- > 0) {
    let j = 0;
    for (let i = 1; i < result.length; i += 2) {
      result[i] = encryptedText[j++];
    }
    for (let i = 0; i < result.length; i += 2) {
      result[i] = encryptedText[j++];
    }
    encryptedText = result.join('');
  }

  return encryptedText;
}

console.log(decrypt(" Tah itse sits!", 3)) //"This is a test!"
// console.log(encrypt("This is a test!", 3)) //" Tah itse sits!"
// console.log(encrypt("This kata is very interesting!", 1)) //"hskt svr neetn!Ti aai eyitrsig"

// console.log(encrypt(null, 0)) //, null