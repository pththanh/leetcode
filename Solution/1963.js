const dataTest = [
  {
    nums: "][][",
  },
  {
    nums: "][",
  },
  {
    nums: "]]][[[",
  },
  {
    nums: "][][[]",
  },
  {
    nums: "[]",
  },
];

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let count = 0;
  let temp_ind = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "[") {
      count = count - 1;
    } else if (s[i] == "]") {
      count = count + 1;
    }
    temp_ind = Math.max(count, temp_ind);
  }
  return Math.ceil(temp_ind / 2);
};

dataTest.forEach(({ nums }, index) => {
  console.log(`Test case: ${index} `, minSwaps(nums));
});
