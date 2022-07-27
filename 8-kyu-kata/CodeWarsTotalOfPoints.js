// Task - https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  let sum = 0;

  games.forEach(element => {
    element = element.split(":");
    if (element[0] > element[1]) {
      sum += 3;
    } else if (element[0] === element[1]) {
      sum += 1;
    }
  })

  return sum;
}

// const points=games=>games.reduce((output,current)=>{
//   return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)

console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])) //10