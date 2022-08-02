//Task https://www.codewars.com/kata/colour-association

function colourAssociation(array) {

  return array.map(element => {
    let a = {};

    a[element[0]] = element[1];

    return a;
  });
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]])) //[{white:"goodness"},{blue:"tranquility"}])