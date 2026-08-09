/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let result = []; 

    function backTracking(currentString, openCount, closeCount) {
        
        // base Case: Agar open aur close dono brackets 'n' ke barabar ho gaye, 
        // iska matlab hamara valid combination ready hai. Result me daal do 

        if(openCount === n && closeCount === n) {
            result.push(currentString); 
            return; 
        }

        // Rule 1: Agar open brackets ki ginti 'n' se kam hai 
        // toh hum ek naya '(' jo sakte hai 
        if(openCount < n) backTracking(currentString + "(", openCount + 1, closeCount); 
        

        // Rule 2: Agar close brackets ki ginti open brackets se kam hai, 
        // toh hum ek ')' jod sakte hain. (yeh string invalid hone se bachata hai)
        if(closeCount < openCount) backTracking(currentString + ")", openCount, closeCount + 1); 
    }

    // Shuruwaat karte hia empty string "" aur 0 open 0 close brackets ke saath 
    backTracking("", 0, 0); 
    return result; 
};