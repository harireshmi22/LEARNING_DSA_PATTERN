/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    let n = nums.length; 
    let stack = []; 
    let result = Array(n).fill(-1); 

    for(let i = 0; i < 2 * n; i++) {

        let currentIndx = i % n;  
        let currentVal = nums[currentIndx]; 

        while(stack.length > 0 && nums[stack[stack.length - 1]] < currentVal) {
            let smallerIndx = stack.pop(); 
            result[smallerIndx] = currentVal;  // answer, indx per direct set kiya
        }

        if(i < n) stack.push(currentIndx); 
    }

    return result; 
};