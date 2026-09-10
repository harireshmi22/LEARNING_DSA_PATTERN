/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    // Descending order me mapped values aur symbols 
    const valToSym = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"], 
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ]

    let result = ""; 
    for(const [val, sym] of valToSym) {
        if(num === 0) break; 

        const count = Math.floor(num / val); 
        if(count > 0) {
            result += sym.repeat(count); 
            num %= val; 
        }
    }

    return result; 
};