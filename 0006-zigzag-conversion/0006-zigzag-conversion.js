/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s; 
    }

    // Har row ke liye ek empty string array banate hain
    const rows = new Array(numRows).fill(""); 
    let currentRow = 0; 
    let goingDown = false; 

    for(let char of s) {
        rows[currentRow] += char; 

        // Jab hum pehli row (0) ya aankhri row (numRows - 1) par pahuchte hain, 
        // toh direction reverse karni padti hai 
        if(currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown; 
        }

        // Agar goingDown true hai toh neeche jao(+1), nhi toh upar jao (-1)
        currentRow += goingDown ? 1 : -1; 
    }

    // Sabhi rows ko aapas mein jod kar final string return kardo 
    return rows.join(""); 
};