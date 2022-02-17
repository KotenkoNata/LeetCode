// Task - https://www.codewars.com/kata/5631ac5139795b281d00007d/train/javascript

const WordDictionary = function () {
  this.arr = []
};

const addWord = function (word) {
  this.arr.push(word)
};

const search = function (word) {
  let reg = new RegExp('^' + word + '$')
  return this.arr.find(v => reg.test(v)) !== undefined;
};

