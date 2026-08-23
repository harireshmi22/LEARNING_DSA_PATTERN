/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let n = temperatures.length; 
    let answer = new Array(n).fill(0); 
    let stack = []; // indices store karna hai 

    for(let i = 0; i < n; i++) {
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIdx = stack.pop(); 
            answer[prevIdx] = i - prevIdx; 
        }

        stack.push(i); 
    }

    return answer; 
};