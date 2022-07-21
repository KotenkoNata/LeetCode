// Task - https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  let n = [], s = [], w = [], e = [];

  walk.forEach(element => {
    if (element === "n") {
      n.push("n");
    }
    if (element === "s") {
      s.push("s");
    }
    if (element === "w") {
      w.push("w");
    }
    if (element === "e") {
      e.push("e");
    }
  })

  return n.length === s.length && w.length === e.length && walk.length === 10;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) //true