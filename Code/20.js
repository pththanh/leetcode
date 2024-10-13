const dataTest = [
  {
    nums: "()",
  },
  {
    nums: "()[]{}",
  },
  {
    nums: "(]",
  },
  {
    nums: "([])",
  },
  ,
  {
    nums: "]",
  },
];

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const lastStack = stack[stack.length - 1];
    if (["{", "(", "["].includes(s[i])) {
      stack.push(s[i]);
    } else if (
      (s[i] === "}" && lastStack === "{") ||
      (s[i] === ")" && lastStack === "(") ||
      (s[i] === "]" && lastStack === "[")
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
};

dataTest.forEach(({ nums }, index) => {
  console.log(`Test case: ${index} `, isValid(nums));
});
