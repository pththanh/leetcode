
const dataTest = [
    {
        nums: ["flower","flow","flight"]
    },
    {
        nums: ["dog","racecar","car"]
    }
]

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    for( let i = 0; i < strs[0].length; i ++){
        for( let j = 0; j < strs.length; j++){
            if (strs[0][i] !== strs[j][i])
                return strs[0].slice(0,i)
        }
    }

    return strs[0];
};

dataTest.forEach(({ nums }, index) => {
    console.log(`Test case: ${index} `, longestCommonPrefix(nums));
  });
  