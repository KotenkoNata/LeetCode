// Task - https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]

function dataReverse(data) {
  let reverseData = [];
  let result = [];

  let a = []


for( let i = 0; i <= data.length - 1; i = i + 8 ){

  let partOfData = data.slice(i, i + 8)
  reverseData.push(partOfData);

}
  result = reverseData.reverse();


  result.map((element)=>{
   element.map((item)=>{
     a.push(item);
   })
  })

return a;
}

// console.log(dataReverse(data1));//,data2

console.log(dataReverse(data3));//data4