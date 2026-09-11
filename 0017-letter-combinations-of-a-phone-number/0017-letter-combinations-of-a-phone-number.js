/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // Edge case: Empty input
    if(!digits || digits.length === 0) return []; 

    // 1. Phone keypad mapping 
    const phoneMap = {
        '2': 'abc',
        '3': 'def', 
        '4': 'ghi',
        '5': 'jkl', 
        '6': 'mno', 
        '7': 'pqrs', 
        '8': 'tuv',
        '9': 'wxyz' 
    }; 

    const result = []; 

    function backTrack(index, currentCombination) {
        
        if(index === digits.length) {
            result.push(currentCombination); 
            return;
        }

        // Har letter ke through iterate karo 
        const letters = phoneMap[digits[index]]; 

        for(let  i = 0; i < letters.length; i++) {
            backTrack(index + 1, currentCombination + letters[i]); 
        }
    }

    // 3. Pehle index se start karo with empty combination
    backTrack(0, "");
    return result; 
};