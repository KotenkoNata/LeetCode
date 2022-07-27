// TAsk - codewars.com/kata/56efc695740d30f963000557/train/javascript

String.prototype.toAlternatingCase = function () {
  let result = '';
  for (let i = 0; i < this.length; i++) {

    if (this[i].toUpperCase() === this[i]) {
      result += this[i].toLowerCase();
    } else {
      result += this[i].toUpperCase();
    }

  }
  return result;
}

console.log("hello WORLD".toAlternatingCase()) //"HELLO world"