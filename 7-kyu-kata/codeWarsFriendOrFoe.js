// Task - https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends) {
  return friends.filter(element => element.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"])) //["Ryan", "Mark"]