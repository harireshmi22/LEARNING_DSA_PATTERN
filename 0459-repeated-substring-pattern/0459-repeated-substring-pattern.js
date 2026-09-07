/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // String ko double karo
    let doubled = s + s; 

    // Pehla aur aankhri character hata do, fir check karo ki original `s` ab bhi majood hai ya nhi 
    let modified = doubled.slice(1, doubled.length - 1); 

    return modified.includes(s); 
};