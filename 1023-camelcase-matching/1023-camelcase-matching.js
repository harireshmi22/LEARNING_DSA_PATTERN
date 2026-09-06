/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    return queries.map(query => isMatch(query, pattern))
};

function isMatch(query, pattern) {
    let pIndex = 0;  // Pattern ke liye pointer 

    for(let qIndex = 0; qIndex < query.length; qIndex++) {
        const qChar = query[qIndex]; 

        // 1. Agar char pattern ke current character se match karta hai 
        if(pIndex < pattern.length && qChar === pattern[pIndex]) {
            pIndex++; 
        } 

        // 2. Agar match nhi hua aur char Capital (uppercase) hai
        else if(qChar >= 'A' && qChar <= 'Z') {
            return false; // Extra uppercase character allow nhi hai 
        }

        // 3. Agar match nhi hua par lowercase hai, toh loop automatically ise skip karega 
    }

    // Saare characters traverse karne ke baad dekhte hai ki pattern pura match hua ya nhi 
    return pIndex === pattern.length; 
}