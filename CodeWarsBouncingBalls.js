// Task - https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h, bounce, window) {

  let result = 0;

  const cond = h > 0 && (bounce > 0 && bounce < 1) && window < h;

  if (cond) {
    if (h > window) {
      result = result + 1;
    }

    while (h > window) {
      let dif = (h * bounce)

      if (dif > window) {
        result = result + 2;
      }

      h = dif;
    }
  } else {
    return -1;
  }

  return result;
}

console.log(bouncingBall(3.0, 0.66, 1.5))
console.log(bouncingBall(3.0, 1.0, 1.5))//15