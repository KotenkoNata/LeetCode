// Task - https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  for (let i = 0; i < birds.length; i++) {
    console.log(`birds[i]`, birds[i], i)
    for (let j = 0; j < geese.length; j++) {
      console.log(`geese[j]`, geese[j], j)
      console.log(`birds before`, birds)
      console.log(`geese[j] === birds[i]`, geese[j] === birds[i], geese[j], birds[i], i, j)
      if (birds[i] === geese[j]) {
        birds.splice(i, 1);
        console.log(`birds after`, birds)
        i = 0;
        j = -1;
        console.log(`j after`, j)
      }
    }
  }

  return birds;
}

console.log(gooseFilter(['Roman Tufted', 'African']))//expected [ 'African' ] to deeply equal []
// console.log(gooseFilter(['Crested', 'Steinbacher', 'African', 'African']))// [ 'Crested', 'African' ] to deeply equal [ 'Crested' ]

// let expected = ['Mallard',
//   'Blue Swedish',
//   'Hook Bill',
//   'Blue Swedish',
//   'Hook Bill',
//   'Crested',
//   'Crested',
//   'Mallard',
//   'Blue Swedish',
//   'Crested',
//   'Barbary',
//   'Hook Bill',
//   'Mallard',
//   'Crested',
//   'Hook Bill',
//   'Blue Swedish',
//   'Barbary',
//   'Mallard',
//   'Crested',
//   'Barbary',
//   'Mallard',
//   'Hook Bill',
//   'Crested',
//   'Blue Swedish',
//   'Hook Bill',
//   'Blue Swedish',
//   'Barbary',
//   'Blue Swedish',
//   'Mallard']
//
// console.log(gooseFilter(['Mallard',
//   'Blue Swedish',
//   'Roman Tufted',
//   'African',
//   'Hook Bill',
//   'Pilgrim',
//   'Blue Swedish',
//   'Pilgrim',
//   'Hook Bill',
//   'Crested',
//   'Pilgrim',
//   'Crested',
//   'Mallard',
//   'Blue Swedish',
//   'Pilgrim',
//   'Crested',
//   'Barbary',
//   'Roman Tufted',
//   'Roman Tufted',
//   'Hook Bill',
//   'African',
//   'Mallard',
//   'Pilgrim',
//   'Roman Tufted',
//   'Steinbacher',
//   'Crested',
//   'Hook Bill',
//   'Blue Swedish',
//   'Barbary',
//   'Mallard',
//   'Steinbacher',
//   'African',
//   'Crested',
//   'Barbary',
//   'Mallard',
//   'Hook Bill',
//   'Steinbacher',
//   'Pilgrim',
//   'Roman Tufted',
//   'Crested',
//   'Roman Tufted',
//   'Pilgrim',
//   'Toulouse',
//   'Blue Swedish',
//   'Hook Bill',
//   'Blue Swedish',
//   'Barbary',
//   'Steinbacher',
//   'Blue Swedish',
//   'Steinbacher',
//   'Mallard',
//   'Steinbacher',
//   'Steinbacher',
//   'Steinbacher',
//   'Steinbacher',
//   'Toulouse']) === expected)
//
// console.log(gooseFilter(['Mallard',
//   'Blue Swedish',
//   'Roman Tufted',
//   'African',
//   'Hook Bill',
//   'Pilgrim',
//   'Blue Swedish',
//   'Pilgrim',
//   'Hook Bill',
//   'Crested',
//   'Pilgrim',
//   'Crested',
//   'Mallard',
//   'Blue Swedish',
//   'Pilgrim',
//   'Crested',
//   'Barbary',
//   'Roman Tufted',
//   'Roman Tufted',
//   'Hook Bill',
//   'African',
//   'Mallard',
//   'Pilgrim',
//   'Roman Tufted',
//   'Steinbacher',
//   'Crested',
//   'Hook Bill',
//   'Blue Swedish',
//   'Barbary',
//   'Mallard',
//   'Steinbacher',
//   'African',
//   'Crested',
//   'Barbary',
//   'Mallard',
//   'Hook Bill',
//   'Steinbacher',
//   'Pilgrim',
//   'Roman Tufted',
//   'Crested',
//   'Roman Tufted',
//   'Pilgrim',
//   'Toulouse',
//   'Blue Swedish',
//   'Hook Bill',
//   'Blue Swedish',
//   'Barbary',
//   'Steinbacher',
//   'Blue Swedish',
//   'Steinbacher',
//   'Mallard',
//   'Steinbacher',
//   'Steinbacher',
//   'Steinbacher',
//   'Steinbacher',
//   'Toulouse']))


// console.log(gooseFilter(['Steinbacher',
//   'Roman Tufted',
//   'Barbary',
//   'Crested',
//   'Mallard',
//   'Crested',
//   'Barbary',
//   'Toulouse',
//   'African',
//   'Blue Swedish',
//   'Pilgrim',
//   'Roman Tufted',
//   'Crested',
//   'Mallard',
//   'Roman Tufted',
//   'Steinbacher',
//   'Toulouse',
//   'Pilgrim',
//   'Toulouse',
//   'Hook Bill',
//   'Barbary',
//   'Mallard',
//   'Pilgrim',
//   'Toulouse',
//   'Toulouse',
//   'Mallard',
//   'Blue Swedish',
//   'Hook Bill',
//   'Blue Swedish',
//   'Toulouse',
//   'Steinbacher',
//   'Toulouse',
//   'Hook Bill',
//   'Pilgrim',
//   'Toulouse',
//   'Steinbacher',
//   'Crested',
//   'Roman Tufted',
//   'Hook Bill',
//   'Hook Bill',
//   'Mallard',
//   'African',
//   'Toulouse',
//   'African',
//   'Blue Swedish',
//   'Toulouse',
//   'African',
//   'Blue Swedish',
//   'Pilgrim',
//   'Blue Swedish',
//   'Mallard',
//   'Mallard',
//   'Blue Swedish',
//   'Hook Bill',
//   'Roman Tufted',
//   'Toulouse',
//   'Roman Tufted',
//   'Roman Tufted',
//   'Hook Bill',
//   'Barbary',
//   'Mallard',
//   'Barbary',
//   'Roman Tufted',
//   'Roman Tufted',
//   'Blue Swedish',
//   'Crested',
//   'Hook Bill',
//   'Blue Swedish',
//   'Pilgrim',
//   'Barbary',
//   'Hook Bill',
//   'Steinbacher',
//   'Barbary',
//   'Toulouse',
//   'Blue Swedish']))//expected [ 'Barbary',
// 'Crested',
//   'Mallard',
//   'Crested',
//   'Barbary',
//   'African',
//   'Blue Swedish',
//   'Crested',
//   'Mallard',
//   'Hook Bill',
//   'Barbary',
//   'Mallard',
//   'Mallard',
//   'Blue Swedish',
//   'Hook Bill',
//   'Blue Swedish',
//   'Hook Bill',
//   'Crested',
//   'Hook Bill',
//   'Hook Bill',
//   'Mallard',
//   'African',
//   'Blue Swedish',
//   'African',
//   'Blue Swedish',
//   'Blue Swedish',
//   'Mallard',
//   'Mallard',
//   'Blue Swedish',
//   'Hook Bill',
//   'Hook Bill',
//   'Barbary',
//   'Mallard',
//   'Barbary',
//   'Blue Swedish',
//   'Crested',
//   'Hook Bill',
//   'Blue Swedish',
//   'Barbary',
//   'Hook Bill',
//   'Barbary',
//   'Blue Swedish' ] to deeply equal [ 'Barbary',
//   'Crested',
//   'Mallard',
//   'Crested',
//   'Barbary',
//   'Blue Swedish',
//   'Crested',
//   'Mallard',
//   'Hook Bill',
//   'Barbary',
//   'Mallard',
//   'Mallard',
//   'Blue Swedish',
//   'Hook Bill',
//   'Blue Swedish',
//   'Hook Bill',
//   'Crested',
//   'Hook Bill',
//   'Hook Bill',
//   'Mallard',
//   'Blue Swedish',
//   'Blue Swedish',
//   'Blue Swedish',
//   'Mallard',
//   'Mallard',
//   'Blue Swedish',
//   'Hook Bill',
//   'Hook Bill',
//   'Barbary',
//   'Mallard',
//   'Barbary',
//   'Blue Swedish',
//   'Crested',
//   'Hook Bill',
//   'Blue Swedish',
//   'Barbary',
//   'Hook Bill',
//   'Barbary',
//   'Blue Swedish' ]

// console.log(gooseFilter(['Crested',
//   'Steinbacher',
//   'Mallard',
//   'Blue Swedish',
//   'Barbary',
//   'Toulouse',
//   'Crested',
//   'Hook Bill',
//   'African',
//   'Blue Swedish',
//   'Pilgrim',
//   'Crested',
//   'Toulouse',
//   'Pilgrim',
//   'Blue Swedish',
//   'Crested',
//   'Blue Swedish',
//   'Blue Swedish',
//   'Steinbacher',
//   'African',
//   'Mallard',
//   'Hook Bill',
//   'Toulouse',
//   'Blue Swedish',
//   'Toulouse',
//   'Hook Bill',
//   'Mallard',
//   'Steinbacher',
//   'Toulouse',
//   'Toulouse',
//   'Steinbacher',
//   'Mallard',
//   'Mallard',
//   'Barbary',
//   'Blue Swedish',
//   'Toulouse',
//   'Pilgrim']))//expected [ 'Crested',
// 'Mallard',
//   'Blue Swedish',
//   'Barbary',
//   'Crested',
//   'Hook Bill',
//   'Blue Swedish',
//   'Crested',
//   'Blue Swedish',
//   'Crested',
//   'Blue Swedish',
//   'Blue Swedish',
//   'African',
//   'Mallard',
//   'Hook Bill',
//   'Blue Swedish',
//   'Hook Bill',
//   'Mallard',
//   'Mallard',
//   'Mallard',
//   'Barbary',
//   'Blue Swedish',
//   undefined ] to deeply equal [ 'Crested',
//   'Mallard',
//   'Blue Swedish',
//   'Barbary',
//   'Crested',
//   'Hook Bill',
//   'Blue Swedish',
//   'Crested',
//   'Blue Swedish',
//   'Crested',
//   'Blue Swedish',
//   'Blue Swedish',
//   'Mallard',
//   'Hook Bill',
//   'Blue Swedish',
//   'Hook Bill',
//   'Mallard',
//   'Mallard',
//   'Mallard',
//   'Barbary',
//   'Blue Swedish' ]
// console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))//[]
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))//,["Mallard", "Hook Bill", "Crested", "Blue Swedish"];)
// console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]))//,["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);)