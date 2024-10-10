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
  let imbalance = 0;
  let maxClosing = 0;
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "[") imbalance--;
    else imbalance++;

    maxClosing = Math.max(maxClosing, imbalance);
  }

  return Math.floor((maxClosing + 1) / 2);
};

dataTest.forEach(({ nums }, index) => {
  console.log(`Test case: ${index} `, minSwaps(nums));
});
