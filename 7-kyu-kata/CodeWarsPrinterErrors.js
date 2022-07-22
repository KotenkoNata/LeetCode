// Task - https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
  let errorsArray = s.match(/[n-z]/gi);
  return errorsArray ? `${errorsArray.length}/${s.length}` : `${0}/${s.length}`
}

console.log(printerError("gcacmfifgkgfmddhiakfdahecikckl"))
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")) ////3/56

