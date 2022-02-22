// TASK - https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// noinspection JSAnnotator
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.legs = 0;
    this.species = "shark";
    this.status = status;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age);
    this.legs = 4;
    this.species = "cat";
    this.status = status;
  }

  introduce() {

    return super.introduce() + `  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age);
    this.legs = 4;
    this.species = "dog";
    this.status = status;
    this.master = master;
  }

  introduce() {
    return super.introduce();
  }

  greetMaster() {
    return `Hello ${this.master}`
  }
}

let billy = new Shark("Billy", 3, "Alive and well");

console.log(billy)

console.log(billy.status)//, "Billy"