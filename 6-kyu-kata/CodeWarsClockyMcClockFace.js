// Task - https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript

const whatTimeIsIt = function (angle) {
  let result = '';

  let hours = Math.floor(angle / 30);

  hours = hours === 0 ? 12 : hours;

  let min = Math.floor((angle % 30) / 0.5);

  if (angle === 0 || angle === 360) {
    return "12:00"
  } else {
    const first = (hours >= 10) ? hours + ":" : "0" + hours + ":";
    const second = (min >= 10) ? min : "0" + min;

    result = first + second;
  }

  return result;
}

// console.log(whatTimeIsIt(0))//, "12:00")
// console.log(whatTimeIsIt(90))//"03:00"
// console.log(whatTimeIsIt(40))//"01:20"

// console.log(whatTimeIsIt(357.62840055634933))//11.55

// console.log(whatTimeIsIt(153.8912960158102))//05:07

// console.log(whatTimeIsIt(227.98934676999295))// = 07:35
// console.log(whatTimeIsIt(147.9540242121071))// = 04:55
// console.log(whatTimeIsIt(12.607660221136019))// = 12:25

console.log(whatTimeIsIt(12.950852176316499))//12:25