// Task - https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {
  const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};

  let result = [];

  arr.forEach(item => {
    if (result.length) {
      const prev = result.pop();
      if (prev !== opposites[item]) {
        result.push(prev);
        result.push(item);
      }
    } else {
      result.push(item);
    }
  })
  return result
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) //West