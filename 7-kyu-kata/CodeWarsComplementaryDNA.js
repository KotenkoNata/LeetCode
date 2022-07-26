// Task - https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        result += "T";
        break;
      case "T":
        result += "A";
        break;
      case "C":
        result += "G";
        break;
      case "G":
        result += "C";
        break;
      default:
        result += dna[i];
    }
  }
  return result;
}

console.log(DNAStrand("ATTGC"))