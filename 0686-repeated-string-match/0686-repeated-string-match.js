/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    const m = a.length; 
    const n = b.length; 

    // step 1: Build LPS array for string 'b'
    const lps = new Array(n).fill(0); 
    let prevLPS = 0, i = 1; 

    while(i < n) {
        if(b[i] === b[prevLPS]) {
            prevLPS++; 
            lps[i] = prevLPS; 
            i++; 
        } else {
            if(prevLPS !== 0) {
                prevLPS = lps[prevLPS - 1]; 
            } else {
                lps[i] = 0; 
                i++; 
            }
        }
    }

    // Step 2: KMP Matching over circularly repeated 'a' 
    // Maximum repetitions required = ceil(n / m) + 1; 
    const maxRepetitions = Math.ceil(n / m) + 1; 
    const maxCharsToCheck = maxRepetitions * m; 

    let aIndex = 0; // Index in repeated 'a'
    let bIndex = 0; // Index in 'b' 

    while(aIndex < maxCharsToCheck) {
        // Modulo operator `% n` gives character from original string 'a' 
        if(a[aIndex % m] === b[bIndex]) {
            aIndex++; 
            bIndex++; 

            // Full string 'b' matched! 
            if(bIndex === n) {
                // Calculate how many full/ partial blocks of 'a' were used 
                return Math.ceil(aIndex / m); 
            }
        } else {
            if(bIndex !== 0) {
                bIndex = lps[bIndex - 1]; 
            } else {
                aIndex++; 
            }
        }
    }

    return -1; 
};