// Task - https://www.codewars.com/kata/526a569ca578d7e6e300034e/train/javascript

const Alphabet = {
  BINARY: '01',//2
  OCTAL: '01234567',//8
  DECIMAL: '0123456789',//10
  HEXA_DECIMAL: '0123456789abcdef',//16
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',//26
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',//26
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',//52
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'//62
};

let bin = Alphabet.BINARY;
let oct = Alphabet.OCTAL;
let dec = Alphabet.DECIMAL;
let hex = Alphabet.HEXA_DECIMAL;
let allow = Alphabet.ALPHA_LOWER;
let alup = Alphabet.ALPHA_UPPER;
let alpha = Alphabet.ALPHA;
let alnum = Alphabet.ALPHA_NUMERIC;


function convert(input, source, target) {

  if (source === target) {
    return input;
  }

  a = '';

  function fromNumberToDec(input, target) {
    return Number(input).toString(target.length);
  }

  function fromDecToAlp(input, target) {
    let result = '';

    let inputNum = parseInt(input);

    while (inputNum > 0) {

      result = target[inputNum % target.length] + result;

      inputNum = Math.floor(inputNum / target.length);
    }

    return result;
  }

  function fromAlpToDec(input, source) {
    let result = 0;

    source = source.split('')

    input = input.split('')

    let k = input.length

    while (input.length > 0) {

      let i = input[input.length - 1];

      let n = source.indexOf(i);

      let pow = Math.pow(source.length, k - input.length);

      result = result + n * pow;

      input = input.slice(0, input.length - 1)
    }

    return result;
  }


  if (source === dec && target !== allow && target !== alup && target !== alpha && target !== alnum) {
    return fromNumberToDec(input, target);

  } else if (source !== dec && target !== bin && target !== oct && target !== dec && target !== hex) {
    let decFormat = parseInt(input, source.length);//convert to dec
    return fromNumberToDec(decFormat, target)

  } else if (source === dec && target !== bin && target !== oct && target !== dec && target !== hex) {
    return fromDecToAlp(input, target)

  } else if (source !== dec && target !== allow && target !== alup && target !== alpha && target !== alnum) {
    let newInput = fromAlpToDec(input, source);
    let decFormat = parseInt(newInput, dec.length);//convert to dec
    return fromNumberToDec(decFormat, target)

  }

}

// console.log(convert("15", dec, bin)); //'1111', '"15" dec -> bin')
//
// console.log(convert("15", dec, oct)); ///'17', '"15" dec -> oct');
//
// console.log(convert("1010", bin, dec)); //'10', '"1010" bin -> dec');
//
// console.log(convert("1010", bin, hex)); //'a', '"1010" bin -> hex');
//
// console.log(convert("0", dec, alpha)); ///'a', '"0" dec -> alpha');

// console.log(convert("27", dec, allow)); //'bb', '"27" dec -> alpha_lower');

// console.log(convert("hello", allow, hex)); //'320048', '"hello" alpha_lower -> hex')

// console.log(convert("hello", allow, dec)); //'3276872',

// console.log(convert("320048", hex, dec)); //3276872

console.log(convert("SAME", alup, alup)); //'SAME', '"SAME" alpha_upper -> alpha_upper');

//Submit

// function toDecimal(input, source) {
//   let result = 0;
//
//   source = source.split('')
//
//   input = input.split('')
//
//   let k = input.length
//
//   while (input.length > 0) {
//
//     let i = input[input.length - 1];
//
//     let n = source.indexOf(i);
//
//     let pow = Math.pow(source.length, k - input.length);
//
//     result = result + n * pow;
//
//     input = input.slice(0, input.length - 1)
//   }
//
//   return result;
// }
//
// function fromDecToAlp(input, target) {
//
//   let result = '';
//
//   target = target.split('')
//
//   let inputNum = parseInt(input);
//
//   if (inputNum === 0) {
//
//     return target[0];
//   }
//
//   while (inputNum > 0) {
//
//     result = target[inputNum % target.length] + result;
//
//     inputNum = Math.floor(inputNum / target.length);
//   }
//
//   return result;
// }
//
// function convert(input, source, target) {
//   let decimal = toDecimal(input, source);
//
//   console.log(decimal)
//
//   return fromDecToAlp(decimal, target);
// }
//
// console.log(convert("26", '0123456789', '0123456789abcdef'))