// TASK https://leetcode.com/problems/remove-element/

const removeElement = function (nums, val) {

  let k = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i = i-1;
    } else {
      k = k + 1;
    }
  }


  return `result ${nums} ${k}`;
};

// console.log(removeElement([0,1,2,2,3,0,4,2], 2)); //[0,1,4,0,3]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //Output: 5, nums = [0,1,4,0,3,_,_,_]