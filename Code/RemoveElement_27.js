// https://leetcode.com/problems/remove-element/

const dataTest = [
    {
        nums: [3,2,2,3],
        val: 3
    },
    {
        nums: [0,1,2,2,3,0,4,2],
        val: 2
    }
]

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let arr = nums.filter(e => e !== val);
    nums.splice(0,nums.length);
    nums.push(...arr);

    return nums.length // remove this line when you submit that code on leetcode.
};

dataTest.forEach(({ nums, val }, index) => {
    console.log(`Test case: ${index}`, removeElement(nums, val));
  });