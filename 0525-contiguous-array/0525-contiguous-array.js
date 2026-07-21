/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // Prefix sum -> index store karne ke liye map 
    let prefixMap = new Map(); 

    // base case: prefix sum 0 and index -1 par exist karta hai 
    prefixMap.set(0, -1); 

    let runningSum = 0; 
    let maxLength = 0; 

    for(let i = 0; i < nums.length; i++) {
        // 1 ke liye +1 aur 0 ke liye -1
        runningSum += (nums[i] === 1) ? 1 : -1; 

        // Ager yeh sum pehele bhi mil chuka hai 
        if(prefixMap.has(runningSum)) {
            // Maximum Length update karo 
            const previousIndex = prefixMap.get(runningSum); 
            maxLength = Math.max(maxLength, i - previousIndex); 
        } else {
            // pehli baar milne par index save karlo 
            prefixMap.set(runningSum, i); 
        }
    }

    return maxLength; 
};