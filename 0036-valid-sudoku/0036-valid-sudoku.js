/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    // 3 hash sets banane ke liye tracking arrays 
    let rows = Array.from({length: 9}, () => new Set()); 
    let cols = Array.from({length: 9}, () => new Set()); 
    let boxes = Array.from({length: 9}, () => new Set()); 

    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            let val = board[row][col]; 

            // 1. khaali cell ('.') ko skip karo 
            if(val === ".") continue; 

            // box index calculation (0 se 8 tak box number) 
            let boxIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3); 

            // 2. check karo kya yeh number pehele se Row, column, ya box mein hai? 
            if(rows[row].has(val) || cols[col].has(val) || boxes[boxIdx].has(val)) return false; // Invalid sudoku

            // 3. agar pehele se nhi tha, toh tracking sets mein add kardo 
            rows[row].add(val); 
            cols[col].add(val); 
            boxes[boxIdx].add(val); 
        }
    }

    return true; 
};

