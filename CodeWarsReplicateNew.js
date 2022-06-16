// Task - https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript

function nouveau(Constructor, ...args) {
  const createdObject = Object.create(Constructor.prototype);
  const setContext = Constructor.apply(createdObject, args);

  return setContext && (typeof setContext === "object" || typeof setContext === "function") ? setContext : createdObject;

}

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return 'Hi, I am ' + this.name;
};

let guy = nouveau(Person, 'Guy');

console.log(guy.name)


