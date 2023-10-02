/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let arr = nums.filter(e => e !== val);
    nums.splice(0,nums.length);
    nums.push(...arr);
};

// MEMORY

var removeElement = function(nums, val) {
    let count = 0;
    for(let i in nums) {
        if(nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }

    return count;
};
