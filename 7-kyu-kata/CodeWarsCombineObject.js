// Task - https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript

function combine(A, B, C) {


  let args = Array.from(arguments);


  let result = args[0];

  for (let i = 1; i <= args.length - 1; i++) {
    result = compareTwoObjects(result, args[i]);
  }


  function compareTwoObjects(objA, objB) {
    let result = {...objA, ...objB};

    const keys1 = Object.keys(objA);
    const keys2 = Object.keys(objB);


    for (let i = 0; i < keys1.length; i++) {
      let key1 = keys1[i];

      let value1 = objA[key1];

      console.log(`key1, value1`, key1, value1)

      for (let k = 0; k < keys2.length; k++) {
        let key2 = keys2[k];

        let value2 = objB[key2];

        console.log(`key2, value2`, key2, value2)

        if (key1 === key2) {
          let sum = value1 + value2;
          result = {...result, [key1]: sum};
          k = keys2.length;
          console.log(`result`, result)
        }

      }

    }
    return result;
  }

  return result;
}


const objA = {a: 10, b: 20, c: 30}
const objB = {a: 3, c: 6, d: 3}
const objC = {a: 5, d: 11, e: 8}
const objD = {c: 3}

console.log(combine(objA, objB, objC)) ///{ a: 18, b: 20, c: 36, d: 14, e: 8 }