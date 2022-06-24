// Task - https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript

function mergeStrings(first, second) {

  let indexOfLast = second.indexOf(first[first.length - 1]);

  let temp = '';

  if (indexOfLast === -1) {
    return first + second;
  } else {

    for (let i = first.length - 1; i > 0; i--) {

      if (!second.startsWith(first[i]) && i === second.length - i) {
        temp += first[i];
        console.log(`temp`, temp)
      } else {

        console.log(first[i], i, second[second.length - i], second.length - i)
        temp += first[i];
        console.log(`temp`, temp)
        console.log("H")
        break;
      }
    }

    temp = temp.split('').reverse().join('');

  }

  return `${first.replace(temp, '')}${second}`
}

// console.log(mergeStrings('abcde', 'cdefgh')) //'abcdefgh' str1.length  - str2[0]
//                        01234    01234
console.log(mergeStrings('abaab', 'aabab')) //"abaabab"

// console.log(mergeStrings("xabc", "ab")) //"xabcab"

// console.log(mergeStrings("abcde", 'bcdefghi')) //abcdefghi