/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    // row 1 se start karenge (kyunki row 0 base case hai)
    const n = matrix.length; 

    for(let i = 1; i < n; i++) {
        for(let j = 0; j < n; j++) {
            
            // Direct Top se value
            let top = matrix[i - 1][j]; 

            // Top-Left Side (edge check); 
            let topLeft = (j > 0) ? matrix[i - 1][j - 1] : Infinity; 

            // Top-right (Edge check)
            let topRight = (j < n - 1) ? matrix[i - 1][j + 1] : Infinity; 

            // current cell me min sum path update karo 
            matrix[i][j] += Math.min(top, topLeft, topRight); 
        }
    }

    // Last row mein se sabse minimum value answer hogi 
    return Math.min(...matrix[n - 1]); 
};