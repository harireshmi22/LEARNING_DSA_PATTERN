/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let count = 0;
    let cols = new Set();
    let d1 = new Set();
    let d2 = new Set();

    function backTracking(row) {

        for (let col = 0; col < n; col++) {

            // first base case banega, hum store karna hai 
            // solution not board, get it 
            if (row === n) {
                count++;
                return;
            }

            if(cols.has(col) || d1.has(row - col) || d2.has(row + col)) continue; 

            cols.add(col); 
            d1.add(row - col); 
            d2.add(row + col); 

            backTracking(row + 1); 

            cols.delete(col); 
            d1.delete(row - col); 
            d2.delete(row + col);
        }
    }

    backTracking(0); 
    return count; 
};