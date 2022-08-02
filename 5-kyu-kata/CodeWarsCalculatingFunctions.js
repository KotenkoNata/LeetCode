// Task - https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function returnNumberOrFunction(number, operation) {
  if (!operation) {
    return number;
  }
  return operation(number);
}

function zero(operation) {
  return returnNumberOrFunction(0, operation);
}

function one(operation) {
  return returnNumberOrFunction(1, operation);
}

function two(operation) {
  return returnNumberOrFunction(2, operation);
}

function three(operation) {
  return returnNumberOrFunction(3, operation);
}

function four(operation) {
  return returnNumberOrFunction(4, operation);
}

function five(operation) {
  return returnNumberOrFunction(5, operation);
}

function six(operation) {
  return returnNumberOrFunction(6, operation);
}

function seven(operation) {
  return returnNumberOrFunction(7, operation);
}

function eight(operation) {
  return returnNumberOrFunction(8, operation);
}

function nine(operation) {
  return returnNumberOrFunction(9, operation);
}

function plus(a) {
  return function (b) {
    return b + a;
  }
}

function minus(a) {
  return function (b) {
    return b - a;
  }
}

function times(a) {
  return function (b) {
    return b * a;
  }
}

function dividedBy(a) {
  return function (b) {
    return Math.floor(b / a);
  }
}

console.log(seven(times(five()))); //35
console.log(four(plus(nine())));