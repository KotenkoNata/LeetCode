// Task - codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  let result = [];

  let array = s.split(' ').map(item => {
    result.push(item.length);
  })

  return Math.min(...result);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")) //3