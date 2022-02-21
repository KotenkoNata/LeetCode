// Task - https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript

class Song {

  constructor(title, artist, listner) {
    this.title = title;
    this.artist = artist;
    this.listner = [];
  }

  howMany(array) {
    let count = 0;
    array.forEach(item => {
      if (!this.listner.includes(item.toLowerCase())) {
        this.listner.push(item.toLowerCase());
        count = count + 1;
      }
    })

    return count;
  }

}

let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

console.log(mountMoose)
console.log(mountMoose.title);
console.log(mountMoose.artist);

console.log(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']))//5
console.log(mountMoose)

console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']))//2
console.log(mountMoose)
// mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus'])//2
// console.log(mountMoose)
