// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

const testcase = [
  {
    nums: [0, 2, 1, 5, 3, 4],
  },
  {
    nums: [5, 0, 1, 2, 3, 4],
  },
];

var buildArray = function (nums) {
  const arr = [];
  nums?.forEach((element) => {
    arr.push(nums[element]);
  });
  return arr;
};

testcase.forEach(({ nums }, index) => {
  console.log(`Test case: ${index}`, buildArray(nums));
});
