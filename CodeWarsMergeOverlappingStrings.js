// Task - https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript

function mergeStrings(first, second) {

  if (first === second) {
    return first
  }

  let minIndex = Math.min(first.length, second.length);

  let tempLeft = '';
  let tempRight = '';

  function moveFirst() {
    tempLeft += first[0];
    first = first.substring(1, first.length);
  }

  function moveSecond() {
    tempRight = second[second.length - 1] + tempRight;
    second = second.substring(0, second.length - 1);
  }

  while (first.length > second.length) moveFirst();
  while (first.length < second.length) moveSecond();

  for (let i = 0; i < minIndex; i++) {
    if (first === second) {
      break;
    }
    moveFirst();
    moveSecond();
  }

  return `${tempLeft}${first}${tempRight}`
}

// console.log(mergeStrings('abcde', 'cdefgh')) //'abcdefgh' str1.length  - str2[0]
//                        01234    01234
// console.log(mergeStrings('abaab', 'aabab')) //"abaabab"

// console.log(mergeStrings("xabc", "ab")) //"xabcab"

// console.log(mergeStrings("abcde", 'bcdefghi')) //abcdefghi

console.log(mergeStrings("baabaaba", "aabaabab")) //abaabaabab