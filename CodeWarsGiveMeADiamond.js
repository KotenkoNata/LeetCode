// TAsk - https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n) {

  if (n > 0 && n % 2 !== 0) {
    let half = [];
    for (let i = 1; i <= (n - 1 / 2); i++) {
      if (i % 2 !== 0) {
        let count = Math.floor(((n - i) / 2)) === 0 ? 0 : ' '.repeat((Math.floor(((n - i) / 2))));
        let temp = '*'
        half.push(count + temp.repeat(i) + "\n")
      }
    }
    return [...half, "*".repeat(n) + "\n", ...half.reverse()].join('');
  }
  return null;

}

console.log(diamond(5)) //"  *\n ***\n*****\n ***\n  *\n";

console.log(diamond(3)) //" *\n***\n *\n"