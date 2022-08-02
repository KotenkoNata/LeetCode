// Task - https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
  return arr.filter(element => element.match(/(:|;)(-|~)?(\)|D)/)).length;
}

console.log(countSmileys([':D', ':~)', ';~D', ':)'])) //4