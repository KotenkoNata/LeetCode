//Task https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
    let result = [];

//find first element
    for(let i = 0; i <= nums.length-1; i++){
        result[0] = i;
        console.log(`first`, i)
        //find second element
        for(let j = i+1; j <= nums.length-1; j++){
            console.log(`second`, j)
            if(nums[i]+nums[j]===target){
                result[1] = j;
                return result;
            }
        }
    }
  return result;
};

console.log(twoSum([2,7,11,15], 9));//0,1
console.log(twoSum([3,2,4], 6));//1,2
console.log(twoSum([3,3], 6));//0,1
console.log(twoSum([2,5,5,11],10));//1,2
console.log(twoSum([1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1], 11)); //5,11


