/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

var nums = [3,2,3], target = 6
const twoSum = (nums, target) => {
    const result = [];
    if(nums.length === 2){
        if(nums[0] + nums[1] === target)
            return [0,1]
    }
    
    for(let i=0; i<nums.length; i++){
        for(let j = i+1; j< nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i,j)
                break;
            }
            
        }
    }   
    return result;
}

console.log(twoSum(nums, target))
