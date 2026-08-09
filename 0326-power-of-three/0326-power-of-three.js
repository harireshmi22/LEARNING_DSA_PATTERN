/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    if(n <= 0) return false; 
    if(n === 1) return true; 

    return (n % 3 === 0) && isPowerOfThree(n / 3); 
};