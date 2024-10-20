const dataTest = [
  {
    nums: [1, 1, 2],
  },
  {
    nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
  },
];

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let duplicateIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[duplicateIndex]) nums[++duplicateIndex] = nums[i];
  }
  return duplicateIndex + 1;
};

dataTest.forEach(({ nums }, index) => {
  console.log(`Test case: ${index} `, removeDuplicates(nums));
});
