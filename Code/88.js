const dataTest = [
  {
    nums: [2, 1, 2],
    m: 2,
    nums2: [5, 5, 2],
    n: 3,
  },
  {
    nums: [1],
    m: 1,
    nums2: [],
    n: 0,
  },
  {
    nums: [0],
    m: 0,
    nums2: [1],
    n: 1,
  },
];

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    if (m + i > nums1.length) {
      nums1.push(nums2[i]);
    } else {
      nums1[m + i] = nums2[i];
    }
  }

  return nums1.sort((a, b) => a - b);
};

dataTest.forEach(({ nums, m, nums2, n }, index) => {
  console.log(`Test case: ${index} `, merge(nums, m, nums2, n));
});
