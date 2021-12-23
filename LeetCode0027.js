// TASK https://leetcode.com/problems/remove-element/

const removeElement = function(nums, val) {
let k = 0;
let result = [];

for( let i = 0; i <= nums.length-1; i++){
  if(nums[i] === val){
    // result.push("_");
  }else{
    k = k + 1;
    result.unshift(nums[i]);
  }
}

console.log(typeof result)
return result;
};

console.log(removeElement([3,2,2,3], 3)); //Output: 2, nums = [2,2,_,_]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); //Output: 5, nums = [0,1,4,0,3,_,_,_]