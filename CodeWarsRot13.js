// Task - https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ciplher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (letter) => ciplher[alphabet.indexOf(letter)]);
}

console.log(rot13("Test")) //"grfg"