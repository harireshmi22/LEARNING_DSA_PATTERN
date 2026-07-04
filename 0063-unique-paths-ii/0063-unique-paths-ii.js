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
    
    obstacleGrid[0][0] = 1; 

    for(let i = 1; i < m; i++) {
        obstacleGrid[i][0] = obstacleGrid[i][0] === 1 ? 0 : obstacleGrid[i - 1][0]; 
    }

    for(let j = 1; j < n; j++) {
        obstacleGrid[0][j] = obstacleGrid[0][j] === 1 ? 0 : obstacleGrid[0][j - 1]; 
    }


    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            obstacleGrid[i][j] = obstacleGrid[i][j] === 1 ? 0 : obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
        }
    }

    // return the inddx with reach 
    return obstacleGrid[m - 1][n - 1];
};