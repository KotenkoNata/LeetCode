// Task - https://www.codewars.com/kata/human-readable-duration-format

function formatDuration(seconds) {
  let time = {year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1}

  let result = [];

  if (seconds === 0) {
    return 'now';
  }

  for (let key in time) {
    if (seconds >= time[key]) {
      let element = Math.floor(seconds / time[key]);
      result.push(element += element > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }

  return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : result[0]
}

// console.log(formatDuration(1))//1s
// console.log(formatDuration(62))//"1 minute and 2 seconds"
// console.log(formatDuration(120))//"2 minutes"
// console.log(formatDuration(3662))//"1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(1))//"1 second"
// console.log(formatDuration(3600))//"1 hour")
// console.log(formatDuration(15731080))//'182 days, 1 hour, 44 minutes and 40 seconds'

console.log(formatDuration(132030240))//'4 years, 68 days, 3 hours and 4 minutes'