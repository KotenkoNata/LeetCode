// Task - https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

function recycle(array) {
  let resultObj = {'paper': [], "glass": [], 'organic': [], 'plastic': []}

  for (let element of array) {
    resultObj[element.material].push(element.type);

    if (element.secondMaterial !== undefined) {
      resultObj[element.secondMaterial].push(element.type);
    }
  }

  return [resultObj['paper'], resultObj['glass'], resultObj['organic'], resultObj['plastic']]
}

let a = [
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
]

console.log(recycle(a));
// [
//   ['wine bottle', 'amazon box', 'beer bottle'],
//   ['wine bottle', 'beer bottle'],
//   ['rotten apples', 'out of date yogurt'],
//   ['out of date yogurt']
// ];