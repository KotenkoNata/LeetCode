// Task - https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript

function spread(func, args) {


  return func(...args)
}

console.log(spread(function(x,y){return x+y}, [1,2])) //(function(x,y){return x+y})(1,2)3 )