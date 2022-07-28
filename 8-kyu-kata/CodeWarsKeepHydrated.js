// Task - https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

function litres(time) {
  return time > 0 ? Math.floor(time * 0.5) : 0;
}

console.log(litres(12.3)) //6