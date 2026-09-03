/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if(nums.length === 0) return 0; 

    let set = new Set(nums); 
    let longest = 0; 

    // Iterate over the SET (not nums) to avoid redundant duplicate checks 
    for(let num of set) {

        // check if num is the start of a sequence 
        if(!set.has(num - 1)) {
            let current = num; 
            let count = 1; 

            // Count consecutive elements 
            while(set.has(current + 1)) {
                current++; 
                count++; 
            }
            
            // update longest 
            longest = Math.max(longest, count); 
        }
    }

    return longest; 
};