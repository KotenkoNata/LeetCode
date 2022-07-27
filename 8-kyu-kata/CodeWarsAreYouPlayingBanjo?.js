// Task - https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

function areYouPlayingBanjo(name) {
  return (name[0] === 'r' || name[0] === 'R') ? name + " plays banjo" : name + " does not play banjo";
}

console.log(areYouPlayingBanjo("Ringo"))