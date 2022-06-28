// Task - https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords) {

  if (title.length === 0) {
    return ''
  }

  let arrayMinorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];

  let result = [];

  let arrayTitle = title.toLowerCase().split(' ');
  arrayTitle[0] = arrayTitle[0].split('');
  arrayTitle[0][0] = arrayTitle[0][0].toUpperCase();
  arrayTitle[0] = arrayTitle[0].join('');

  arrayTitle.forEach(item => {

    if (arrayMinorWords.includes(item)) {
      result.push(item);
    } else {
      item = item.split('');
      item[0] = item[0].toUpperCase();
      item = item.join('')
      result.push(item);
    }

  })

  return result.join(' ');
}

console.log(titleCase('')) //' '
// console.log(titleCase('a clash of KINGS', 'a an the of')) //A Clash of Kings

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) //, 'The Wind in the Willows'