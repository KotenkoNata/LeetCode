// Task - https://www.codewars.com/kata/526ec46d6f5e255e150002d1/train/javascript

function createFunctions(n) {
  let callbacks = [];

  for (let i = 0; i < n; i++) {
    const j = i;
    callbacks.push(function () {
      return j;
    });
  }

  return callbacks;
}

let callbacks = createFunctions(3);

for (let i = 0; i < callbacks.length; i++) {
  console.log(callbacks[i](), i, 'Function with index ' + i);
}


