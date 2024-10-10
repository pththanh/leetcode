const dataTest = [
  {
    nums: "())",
  },
  {
    nums: "(((",
  },
  {
    nums: ")))(((",
  },
  {
    nums: "()",
  },
  {
    nums: "()))((",
  },
];

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let openParentheses = 0;
  let minAddRequired = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openParentheses++;
    } else if (s[i] === ")") {
      openParentheses > 0 ? openParentheses-- : minAddRequired++;
    }
  }

  return openParentheses + minAddRequired;
};

dataTest.forEach(({ nums }, index) => {
  console.log(`Test case: ${index} `, minAddToMakeValid(nums));
});
