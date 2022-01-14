// Task - https://www.codewars.com/kata/559f35bde66a7250f60000c9/train/javascript

const Sum = function(arr){
  return arr.reduce( (previousValue, currentValue) => {
    return previousValue + currentValue;
  });
}

console.log(Sum([1,2,3,4,5,6,7,8,9,10]))//55
console.log(Sum([71,-548,12.3,83,-47,-1.7,-892,58,31415,2718,-38]) )//32830.6