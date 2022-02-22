// Task - https://www.codewars.com/kata/56fcc1ee45040039ab0016da/train/javascript

class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return 6 * this.length ** 2;
  }

  set surfaceArea(value) {
    this.length = Math.pow(value / 6, 1 / 2)
  }

  set volume(value) {
    this.length = Math.pow(value, 1 / 3)
  }

  get volume() {
    return Math.pow(this.length, 3);
  }
}

let cube = new Cube(1);

console.log(cube)

console.log(cube.surfaceArea = 54);
console.log(cube)

console.log(cube.length)