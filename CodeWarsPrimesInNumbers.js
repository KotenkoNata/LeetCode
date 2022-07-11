// Task - https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript

function primeFactors(n) {

  if (!n || n < 2)
    return [];
  let factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  let finish = '';

  let result = factors.reduce((prev, curr) => (prev[curr] = prev[curr] + 1 || 1, prev), {});
  for (const [key, value] of Object.entries(result)) {
    console.log(`${key}: ${value}`);
    finish = finish + (`${value > 1 ? (`(${key}**${value})`) : `(${key})`}`)
  }

  return finish;

}

console.log(primeFactors(7775460)) //"(2**2)(3**3)(5)(7)(11**2)(17)"