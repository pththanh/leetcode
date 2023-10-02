/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    let result = ""
    let first = strs[0]
    let last = strs[strs.length - 1]
    for(let i=0; i<first.length;i++) {
        if(first[i] != last[i]) break;
        result = result + first[i]
    }
    return result
};


// MEMORY

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(strs.length == 0) {
		return ''
	}

	let ans = strs[0]
	for(let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
        }
    }
    return ans;
};