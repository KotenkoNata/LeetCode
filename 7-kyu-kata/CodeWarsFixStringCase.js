// task - https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s) {

  let upperCount = 0;
  let lowerCount = 0;

  for (let i = 0; i < s.length; i++) {

    if (s[i] === s[i].toUpperCase()) {
      upperCount++;
    } else {
      lowerCount++;
    }
  }

  return lowerCount < upperCount ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve("Code")) //code