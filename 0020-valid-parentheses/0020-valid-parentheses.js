/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; 

    for(let char of s) {
        if(char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            if(stack.length === 0) {
                return false; 
            }

            if(char === ")" && stack[stack.length - 1] !== "(") {
                return false; 
            }

            if(char === "]" && stack[stack.length - 1] !== "[") {
                return false; 
            }

            if(char === "}" && stack[stack.length - 1] !== "{") {
                return false; 
            }

            stack.pop(); 
        } 
        
    }  

    return stack.length === 0; 
};