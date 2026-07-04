/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    // create a dp array m x n 
    // and fill the array with 0 m to n
    const dp = Array.from({ length: m }, () => Array(n).fill(0))

    // set the starting point 0 there is robot place 
    dp[0][0] = 1;

    // fill the first row 
    for (let i = 1; i < m; i++) {
        dp[i][0] = 1
    }

    // fill the colum 
    for (let j = 1; j < n; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};