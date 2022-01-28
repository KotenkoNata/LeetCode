// Task - https://www.codewars.com/kata/lottery-ticket

function bingo(ticket, win) {
  let totalMinWin = 0;
  for (let i = 0; i < ticket.length; i++) {
    let compareNumber = ticket[i][1];
    for (let k = 0; k < ticket[i][0].length; k++) {
      console.log(ticket[i][0][k], ticket[i][0].charCodeAt(k), compareNumber)
      if (ticket[i][0].charCodeAt(k) === compareNumber) {
        console.log(ticket[i][0].charCodeAt(k), compareNumber, ticket[i][0])
        totalMinWin = totalMinWin + 1;
        break;
      }
    }
  }
  console.log(totalMinWin)
  return totalMinWin >= win ? 'Winner!' : 'Loser!';
}

// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))//Loser

// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))//winner
//
// console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3))//loser

console.log(bingo([['MENWWWQ', 77],
  ['UUG', 89],
  ['ZGU', 71],
  ['SNRJB', 84],
  ['HLCP', 65],
  ['TGFEWOT', 84],
  ['SEGKPSNW', 84],
  ['GPB', 66]], 3))//Winner!