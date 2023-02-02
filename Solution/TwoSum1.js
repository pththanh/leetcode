/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(target - nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i]) && hashMap.get(nums[i]) !== i) {
      return [hashMap.get(nums[i]), i];
    }
  }
  return null;
};
console.log(twoSum([3, 6, 4, 2], 5));
