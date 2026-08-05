/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    let low = 0;
    let high = n - 1;

    while(low <= high) {
        let maxRow = 0; 
        let midCol = Math.floor(low + (high - low) / 2); 

        for(let i = 1; i < m; i++) {
            if(mat[i][midCol] > mat[maxRow][midCol]) {
                maxRow = i; 
            }
        }

        let curr = mat[maxRow][midCol]; 
        
        let left = midCol - 1 >= 0 ? mat[maxRow][midCol - 1] : -1; 
        let right = midCol + 1 < n ? mat[maxRow][midCol + 1] : -1;

        if(curr > left && curr > right) {
            return [maxRow, midCol]
        } else if(curr < left) {
            high = midCol - 1; 
        } else {
            low = midCol + 1; 
        }
    }

    return [-1, -1]
};