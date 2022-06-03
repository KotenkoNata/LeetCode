// Task - https://www.codewars.com/kata/58d014421c694f71630000bc/train/javascript

async function antiOptimizeAsync(task) {
  const promise = await new Promise(function (resolve) {
    setTimeout(resolve, 1500);
  });
  return task();
}


