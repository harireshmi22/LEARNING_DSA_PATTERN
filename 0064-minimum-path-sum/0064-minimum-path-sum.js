/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {

    let m = grid.length;
    let n = grid[0].length;

    let dp = Array.from({ length: m }, () => Array(n).fill(0));

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) dp[i][j] = grid[0][0]; 
            else if(i === 0) dp[i][j] = grid[i][j] + dp[i][j - 1] // left cell se aane ka path 
            else if(j === 0) dp[i][j] = grid[i][j] + dp[i - 1][j] // Top cell se aane ka path 
            else dp[i][j] = grid[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j]); 
        }
    }

    return dp[m - 1][n - 1]; 
};