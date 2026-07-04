/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {

    // length of the m and n 
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // check if the starting point is taken or not 
    // if not there is a robot then fill with 1
    if (obstacleGrid[0][0] === 1) return 0;


    // create a new array and fill with 0 
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    // if starting [0][0] starting is not equal to zero 
    // then preserve the starting point because of robot 
    dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

    // traverse the m row and fill with 1
    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i - 1][0] : 0;
    }

    // traverse the n colum and fill with 1
    for (let j = 1; j < n; j++) {
        dp[0][j] = obstacleGrid[0][j] === 0 ? dp[0][j - 1] : 0;
    }

    // then traverse all the matrix and 
    // tell the how many ways to reach
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 0 ? dp[i - 1][j] + dp[i][j - 1] : 0;
        }
    }

    // return the inddx with reach 
    return dp[m - 1][n - 1];
};