/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    
    const prefixes = new Set(); 

    // Step 1: arr1 ke sabhi possible prefixes Set me daalo 
    for(let num of arr1) {
        while(num > 0) {
            prefixes.add(num); 
            num = Math.floor(num / 10); 
        }
    }

    let maxLen = 0; 

    for(let num of arr2) {
        while(num > 0) {
            // Agar current prefix Set se mil gaya 
            if(prefixes.has(num)) {
                // String length se prefix ki length calculate karo 
                maxLen = Math.max(maxLen, String(num).length); 
                break; // Is number ka sabse lamba valid prefix mil chuke hai 
            }

            num = Math.floor(num / 10); 
        }
    }

    return maxLen; 
};