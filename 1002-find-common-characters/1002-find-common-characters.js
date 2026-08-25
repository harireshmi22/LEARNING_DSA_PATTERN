/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    // 1. Pehele word ki character frequency note karlo 
    let minFreq = new Array(26).fill(0); 
    for(let char of words[0]) {
        let index = char.charCodeAt(0) - 97; 
        minFreq[index]++; 
    }

    // 2. baaki words ke saath compare karna 
    for(let i = 1; i < words.length; i++) {
        let currentFreq = new Array(26).fill(0); 
        for(let char of words[i]) {
            currentFreq[char.charCodeAt(0) - 97]++; 
        }

        for(let j = 0; j < 26; j++) {
            minFreq[j] = Math.min(minFreq[j], currentFreq[j]); 
        }
    }


    let result = []; 
    for(let i = 0; i < 26; i++) {
        while(minFreq[i] > 0) {
            result.push(String.fromCharCode(i + 97)); 
            minFreq[i]--; 
        }
    }

    return result; 
};