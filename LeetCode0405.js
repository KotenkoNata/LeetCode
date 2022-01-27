// TASK -https://leetcode.com/problems/convert-a-number-to-hexadecimal/

const toHex = function (num) {

  if (num < 0) {
    num = 0xFFFFFFFF + num + 1;
  }
  return num.toString(16);
};

console.log(toHex(-1));///"ffffffff"
