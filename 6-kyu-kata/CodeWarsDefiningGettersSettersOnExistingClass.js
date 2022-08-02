// Task - https://www.codewars.com/kata/55bcf04de45497c54a0000d0/train/javascript

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}


Object.defineProperty(Person.prototype, "name", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },

  set(newName) {
    [this.firstName, this.lastName] = newName.split(" ");
  }
});


let augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole);
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'