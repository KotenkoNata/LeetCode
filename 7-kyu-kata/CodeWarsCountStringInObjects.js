// Task -https://www.codewars.com/kata/count-strings-in-objects

function strCount(obj) {

  let sum = 0;

  for (let i in obj) {

    console.log(obj[i])
    if (typeof obj[i] === 'object') sum += strCount(obj[i]);
    if (typeof obj[i] === 'string') sum = sum + 1;
  }

  return sum;
}

// const value = Object.values(obj);
//
// console.log(obj)
//
// let sum = 0;
//
// value.map(item=>{
//   if(!isNaN(parseFloat(item)) && isFinite(item)){
//     sum = +item + sum;
//   }
//
// })
//
// return sum


// console.log(strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime", 2, 3, 4],
//   fifth: null,
//   sixth: undefined,
//   seventh: {}
// })) //3

// console.log(strCount(['1', 2, '3', '4']));//Did not count the correct number of strings. Check counting inside nested objects. Did you start counting from 0?: expected 10 to equal 3

// console.log(strCount([
//   'strin', 'strin', 'strin', 'strin', 'strin',
//   'strin', 'strin', 'strin', 'strin', 'strin',
//   'strin', 'strin', 'strin', 'strin', 'strin',
//   'strin', 'strin', 'strin', 'strin', 'strin',
//   'strin', 'strin', 'strin', 'strin', 'strin',
//   'strin', 'strin', 'strin', 'strin', 'strin',
//   'strin', 'strin', 'strin', 'strin', 'strin',
//   'strin', 'strin', 'strin', 'strin', 'strin',
//   'strin', 'strin', 'strin', 'strin', 'strin',
//   'strin', 'strin', 'strin', 'strin'
// ]))//Did not count the correct number of strings.: expected 0 to equal 9
