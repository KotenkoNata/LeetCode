// Task - https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

function sortMyString(S) {
  let even = S[0];
  let odd = '';

  for(let i = 1; i <= S.length - 1; i++ ){
    if( i % 2 === 0){
      even = even + S[i];
    }else{
      odd = odd + S[i];
    }
  }
  return `${even} ${odd}`;
}

console.log(sortMyString("CodeWars"))//"CdWr oeas"
console.log(sortMyString("YCOLUE'VREER"))//"YOU'RE CLEVER"