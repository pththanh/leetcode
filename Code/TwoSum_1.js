/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */
const testCase = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
  },
  {
    nums: [3, 2, 4],
    target: 6,
  },
  {
    nums: [3, 3],
    target: 6,
  },
];

const twoSum = (nums, target) => {
  const result = [];
  if (nums.length === 2) {
    if (nums[0] + nums[1] === target) return [0, 1];
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        break;
      }
    }
  }
  return result;
};

const twoSum1 = (nums, target) => {
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

testCase.forEach(({ nums, target }, index) => {
  console.log("Index: ", index, twoSum1(nums, target));
});
