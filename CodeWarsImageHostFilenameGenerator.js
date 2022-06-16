// Task - https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript

function generateName() {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return photoManager.nameExists(result) ? generateName() : result;
}

