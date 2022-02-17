// TAsk - https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript

const runLengthEncoding = function (str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let count = 1;

    while (str[i] === str[i + 1]) {
      count = count + 1;
      i = i + 1;
    }
    result.push([count, str[i]])
    count = 1;
  }


  return result
}

console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"))//[[34,'a'], [3,'b']]);
console.log(runLengthEncoding("hello world!"))//[[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);