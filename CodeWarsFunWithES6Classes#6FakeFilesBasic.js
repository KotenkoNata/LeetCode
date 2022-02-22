// TAsk - https://www.codewars.com/kata/5784c8116211383b5f0001d3/train/javascript

class File {
  constructor(fullName, contents) {
    const fullNameArray = fullName.split('.');
    const fileNameArray = fullNameArray.filter((el, index) => index !== fullNameArray.length - 1)
    this._fullName = fullName;
    this.contents = contents;
    this._filename = fileNameArray.join('.');
    this._extension = fullNameArray[fullNameArray.length - 1];
    this.sIndex = 0;
    this.cIndex = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    return this._filename;
  }

  get extension() {
    return this._extension;
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    this.contents = `${this.contents.length ? this.contents + '\n' : ''}${str}`;
  }

  gets() {
    return this.contents.length === 0 ? undefined : this.contents.split('\n')[this.sIndex++];
  }

  getc() {
    return this.contents.length >= 0 ? this.contents[this.cIndex++] : undefined;
  }
}


const example = new File("example.txt", "An example file");

// console.log(example.fullName)
// console.log(example.filename)
// console.log(example.extension)
// example.fullName = "modified.txt";
// console.log(example.fullName)
// example.write("Hello World");
// example.write("This is an example file provided to you by the Kata author");
// example.write("This example file is used as an example test case.");
// console.log(example.getContents())
// console.log(example.gets())
// console.log(example.gets())
// console.log(example.gets())
console.log(example.filename = "sdfsdf")
console.log(example.filename)
// console.log(example.getc())//, "A"
// console.log(example.getc())//, "n"
// console.log(example.getc())//, " ";
// console.log(example.getc());//, "e"
// console.log(example.getc());//, "x"
// console.log(example.getc());//, "a"
// console.log(example.getc());//, "m"
// console.log(example.getc());//, "p"
// console.log(example.getc());//, "l"
// console.log(example.getc());//, "e"
// console.log(example.gets())
// console.log(example.getContents())
