/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length; 
    let n = text2.length; 

    // let's make an array for storing the computation result
    // so we don't need to recomputaion 
    let memo = Array.from({length: m + 1}, () => Array(n + 1).fill(-1)); 

    function lcsRec(txt1, txt2, memo, m, n) {

        // base case 
        if(m === 0 || n === 0) return 0; 

        // If Already exists in the memo table 
        if(memo[m][n] !== -1) return memo[m][n]; 

        // Match the last character of text 1 and text 2 
        if(txt1[m - 1] === txt2[n - 1]) {
            memo[m][n] = 1 + lcsRec(txt1, txt2, memo, m - 1, n - 1); 
            return memo[m][n]; 
        }

        // If characters do not match 
        memo[m][n] = Math.max(lcsRec(txt1, txt2, memo, m, n - 1), lcsRec(txt1, txt2, memo, m - 1, n)); 
        return memo[m][n]; 
    }

    lcsRec(text1, text2, memo, m, n); 
    return memo[m][n]; 
};

