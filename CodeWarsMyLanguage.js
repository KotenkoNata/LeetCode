// Task - https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

function myLanguages(results) {

  let a = [];

  let result = []

  for (let language in results){
    a.push([language, results[language]]);
  }


  a.sort(function (a,b) {
    return b[1] - a[1];
  });


  a.map(function (element) {
    console.log(`element`,element[1])
    if(element[1] >=60){
      result.push(element[0])
    }
  })


  return result;
}

// console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65})) ///["Ruby", "Python"]
console.log(myLanguages({"Hindi": 60, "Greek": 71, "Dutch": 93})) ///["Dutch", "Greek", "Hindi"]