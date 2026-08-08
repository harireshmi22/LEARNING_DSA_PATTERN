/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    // answer save karennge
    let ans = [];
    //board create kiya aur usme queen place karenge 
    let board = Array.from({ length: n }, () => Array(n).fill("."))
    let cols = new Set(); // cols check karna hai 
    let d1 = new Set(); // diagonal 1
    let d2 = new Set();  // diagonal 2

    function backTrack(row) {
        if (row === n) {
            ans.push(board.map(r => r.join('')));
            return
        }

        for (let col = 0; col < n; col++) {

            // agar cols, d1, aur d2 me koi queen place hai pehele se toh 
            // uss path ko invalid karo 
            if (cols.has(col) || d1.has(row - col) || d2.has(row + col)) continue;

            board[row][col] = "Q";
            cols.add(col);
            d1.add(row - col);
            d2.add(row + col);


            backTrack(row + 1);

            board[row][col] = ".";
            cols.delete(col);
            d1.delete(row - col);
            d2.delete(row + col);
        }
    }

    backTrack(0);
    return ans;
};