// Task - https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

function killer(suspectInfo, dead) {
  let count = [];

  let numberOfDead = dead.length;

  let nameOfKiller;

  const result =[]

  for (let name in suspectInfo){
    result.push(suspectInfo[name]);
  }

  let nameOfKillers = Object.keys(suspectInfo);


  for(let i = 0; i <= dead.length - 1; i++){

    for(let k = 0; k <= result.length-1; k++){

      for(let m = 0; m <= result[k].length-1; m++){

        if(numberOfDead ===1){
          if(dead[i] === result[k][m]){
            return nameOfKiller = nameOfKillers[k]
          }
        }else{
          if(dead[i] === result[k][m]){
            console.log(dead[i], result[k][m], k, m );



            if(count.includes(k) || count.length === numberOfDead){
              return nameOfKiller = nameOfKillers[k]
            }

            count.push(k);
            console.log(`count`,count)

          }
        }


      }
    }
  }

}

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))
// James

console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']))
//Megan