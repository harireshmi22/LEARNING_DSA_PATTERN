/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            // 1. dhundho ki koi khaali box hai ki nhi 
            // agar hai toh place karnese pehele woh number 
            // valid hai ki rakhne ke check karo

            if (board[row][col] === ".") {
                // number place karna hai:w

                for (let num = 1; num <= 9; num++) {
                    let charNum = num.toString();

                    // 3. ab check karo ki yeh charNum place kar sakte hai ki nhi valid hai 
                    if (isValid(board, row, col, charNum)) {
                        // agar true hota hai, toh valid hai number place kar sakte ho 
                        board[row][col] = charNum;

                        // 4. agle empty spot ko fill karne ke liye aage badho 
                        if (solveSudoku(board)) return true;

                        // 5. backtrack: wapas empty banado agar raasta invalid hai 
                        // ya block hai
                        board[row][col] = "."
                    }
                }

                return false;
            }
        }
    }

    return true;
};

function isValid(board, row, col, charNum) {
    for (let i = 0; i < 9; i++) {

        // Row check karo 
        if (board[row][i] === charNum) return false;

        // columns check karo 
        if (board[i][col] === charNum) return false;

        // 2d array ko 1d array me covert karke check kiya 
        let rowBox = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        let colBox = 3 * Math.floor(col / 3) + Math.floor(i % 3);

        if (board[rowBox][colBox] === charNum) return false;
    }

    return true;
}