// Task - https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript
const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

Object.prototype.hash = function (string) {
  return string.split('.').reduce(function (a, b) {
    return a && a[b];
  }, this)
}


obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined