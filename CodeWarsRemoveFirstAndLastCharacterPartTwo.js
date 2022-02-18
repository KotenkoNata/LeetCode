// Task - https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(arr) {

  let result = arr.split(',')

  if (result.length <= 2) {
    return null;
  } else {
    result.pop()
    result.shift()
    return result.join(' ')
  }

}


console.log(array('1, 3'))//null
// console.log(array('1,2,3,4,5'))/// '2 3 4');
console.log(array('1,2,3'))//'2'