/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index) {
        // out of bound
        if (row < 0 || row >= rows || col < 0 || col >= cols) return false;

        // letter doesn't match 
        if (board[row][col] !== word[index]) return false;

        // Entire word found 
        if (index === word.length - 1) return true;

        // Mark as visited 
        const temp = board[row][col];
        board[row][col] = "#";

        // Try all 4 directions 
        const found = dfs(row - 1, col, index + 1) ||
            dfs(row + 1, col, index + 1) ||
            dfs(row, col - 1, index + 1) ||
            dfs(row, col + 1, index + 1);

        // BackTrack
        board[row][col] = temp;

        return found;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if(dfs(row, col, 0)) return true; 
        }
    }

    return false; 
};