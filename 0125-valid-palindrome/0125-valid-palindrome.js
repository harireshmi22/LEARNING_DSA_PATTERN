/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); 
    let n = str.length;

    let i = 0; 
    let j = n - 1; 

    while(i <= j) {
        if(str[i] !== str[j]) {
            return false; 
        } else {
            i++; 
            j--; 
        }
    }  

    return true; 
};