/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return nums.concat([...nums]);
};

const dataTest = [
  {
    nums: [1, 2, 1],
  },
  {
    nums: [1, 3, 2, 1],
  },
];

dataTest.forEach(({ nums }, index) => {
  console.log(`Test case: ${index}`, getConcatenation(nums));
});
