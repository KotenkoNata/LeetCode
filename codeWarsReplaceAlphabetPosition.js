// Task -https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  text = text.toUpperCase().split(' ').join('')
  let result = ''

  for (let i = 0; i < text.length; i++) {

    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      result += ` ${text.charCodeAt(i) - 64}`.toString();
    }

  }
  return result.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")) //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"