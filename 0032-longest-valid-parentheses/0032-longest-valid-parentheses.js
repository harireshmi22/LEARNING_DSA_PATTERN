/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

    const stack = [-1]; 
    let maxLength = 0; 

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(i); 
        } else {
            stack.pop(); 

            if(stack.length === 0) {
                // Nayi base boundary set karo 
                stack.push(i); 
            } else {
                // Current valid substring ki length calculate karo 
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength; 
};