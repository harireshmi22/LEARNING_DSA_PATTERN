/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = []; 
    // Agar s choti hai p se toh anagram ban hi nhi sakta 
    if(s.length < p.length) return result; 

    // 26 size arrays character ki frequency store karne ke liye 
    let pCount = new Array(26).fill(0); 
    let sCount = new Array(26).fill(0); 
    
    // Helper function character ko 0 - 25 index me convert karne ke liye 
    // 'a' ki ASCII value 97 hoti hai 
    const getIndex = (char) => char.charCodeAt(0) - 97; 

    // step 1: Peheli window aur pCount setup karo 
    for(let i = 0; i < p.length; i++) {
        pCount[getIndex(p[i])]++; 
        sCount[getIndex(s[i])]++; 
    }

    // Step 2: Main logic - sliding Window 
    for(let i = p.length; i < s.length; i++) {
        // Compare arrays. Array ko string banakar compare karna easy trick hai 
        if(pCount.join('') === sCount.join('')) {
            result.push(i - p.length) // valide index store karo 
        }

        // Window slide kar rhe hai 
        // Naya character add karo (Right side) 
        sCount[getIndex(s[i])]++; 

        // Purana character remove karo (left side); 
        let leftCharIndex = getIndex(s[i - p.length]); 
        sCount[leftCharIndex]--; 
    }

    // Last Window ko check karna mat bhulna 
    if(pCount.join('') === sCount.join('')) {
        result.push(s.length - p.length); 
    }

    return result; 
};