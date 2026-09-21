/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let i = s.length - 1; 

    // 1. Last ke spaces skip karo
    while(i >= 0 && s[i] === " ") {
        i--; 
    }

    // 2. Last word ke characters count karo 
    let count = 0; 

    while(i >= 0 && s[i] !== " ") {
        count++; 
        i--; 
    }

    return count; 
};