// https://leetcode.com/problems/palindrome-number/

const dataTest = [
    {
        nums: 121
    },
    {
        nums: -121
    },
    {
        nums: 10
    },
    {
        nums: 0
    }
]


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 ){
        return false
    }   
    const a = x.toString().split("")

    const y = x.toString().split("").reverse()

    return JSON.stringify(a) === JSON.stringify(y);
};

dataTest.forEach(({ nums }, index) => {
    console.log(`Test case: ${index}`, isPalindrome(nums));
  });