/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    // base case: pehli string hamesha "1" hoti hai 
    let result = "1"; 

    // humein n - 1 times process repeat karna hai 
    for(let i = 2; i <= n; i++) {
        let nextResult = ""; 
        let count = 1; 

        // Previous string (result) ke characters ko read karo 
        for(let j = 0; j < result.length; j++) {
            // Agar current character and next character same hai toh, count badhao 
            if(result[j] === result[j + 1]) {
                count++;
            } else {
                // agar different hai, toh count aur character ko add karo 
                nextResult += count + result[j]; 
                // count ko wapas 1 reset kardo naye character ke liye
                count = 1; 
            }
        }

        // result ko update karo next iteration ke liye 
        result = nextResult; 
    }

    return result; 
};