/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    
    const rows = mat.length; 
    const cols = mat[0].length; 
    
    let totalSubmatrices = 0; 

    // Dp array to store consecutive height of 1s above each cell 
    const heights = Array.from({length: rows}, () => new Array(cols).fill(0)); 

    // Step 1: Build heights array 
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(mat[i][j] === 1) {
                heights[i][j] = (i === 0) ? 1 : heights[i - 1][j] + 1; 
            }
        }
    }

    // Step 2: Count submatrices with bottom-right at (i, j)
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            let minHeight = heights[i][j]; 

            // Move leftWards from current column j 
            for(let k = j; k >= 0; k--) {
                if(heights[i][k] === 0) break; // optimization: no submatrices past 0 height

                minHeight = Math.min(minHeight, heights[i][k]); 
                totalSubmatrices += minHeight; 
            }
        }
    }

    return totalSubmatrices; 
};