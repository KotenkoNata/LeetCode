// Task -https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {

  let arr = s.split(/(?!$)/);

  let result = [];


  for (let i = 0; i < arr.length; i++) {
    let a = arr[i].toUpperCase();
    a = a + arr[i].toLowerCase().repeat(i);

    result.push(a);

  }
  return result.join('-')
}

console.log(accum("ZpglnRxqenU"));