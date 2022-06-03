// Task - https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript

class Cat {
  static cats = [];

  constructor(name, weight) {

    if (!name) {
      throw new Error("Please add name")
    }
    if (!weight) {
      throw new Error("Please add weight")
    }

    Object.defineProperty(this, 'name', {get: () => name});
    Object.defineProperty(this, 'weight', {get: () => weight, set: value => weight = value});

    Cat.cats.push(this)
  }

  static averageWeight() {
    return Cat.cats.reduce((acc, cat) => (acc + cat.weight), 0) / Cat.cats.length
  }
}


fluffy = new Cat('fluffy', 15);
garfield = new Cat('garfield', 25);

console.log(Cat.averageWeight())