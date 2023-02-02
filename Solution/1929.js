/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

// MEMORY:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const n = nums.length;
  const newArray = new Array(2 * n);

  for (let i = 0; i < nums.length; i++) {
    newArray[i] = nums[i];
    newArray[i + n] = nums[i];
  }
  return newArray;
};
