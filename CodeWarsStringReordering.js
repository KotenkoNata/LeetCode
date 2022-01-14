// Task - https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
let List = [
  {'4': 'dog'}, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
];


function sentence(List) {

  let result = '';

  let sorted = List.sort(function (a, b) {
    const k1 = parseInt(Object.keys(a)[0])
    const k2 = parseInt(Object.keys(b)[0])
    return k1 - k2;
  })

  sorted.map(element =>{
    console.log(element)
    result = result + Object.values(element)+ " ";
  })



  return result.trim()
}

console.log(sentence(List))//'Vatsan took his dog for a spin'