// TAsk - https://www.codewars.com/kata/56fbdda707cff41b68000de2

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    return 2 * this.length * this.width + 2 * this.length * this.height + 2 * this.height * this.width;
  }

  get volume() {
    console.log(this.length * this.width * this.height)
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super();
    this.length = length;
    this.width = length;
    this.height = length;
  }
}

let cuboid = new Cuboid(1, 2, 3);

console.log(cuboid)
console.log(cuboid.volume)