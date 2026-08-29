/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let rows = matrix.length; 
    let cols = matrix[0].length; 
    let totalSquares = 0; 

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            // Agar cell 0 hai, toh to wo koi square me count nhi hoga. 
            if(matrix[i][j] === 1) {
                // pehli row (i = 0) aur pehla column (j = 0) boundary cells hai
                // Unke top ya left me elements nhi hote, isliye unke squares ki value max 1 hi rahegi. 

                if(i > 0 && j > 0) {
                    matrix[i][j] = 1 + Math.min(
                        matrix[i - 1][j], // top 
                        matrix[i][j - 1], // left
                        matrix[i - 1][j - 1] // top-left diagonal
                    )
                }
                // commulative sum maintain karein 
                totalSquares += matrix[i][j]; 
            }
        }
    }

    return totalSquares; 
};