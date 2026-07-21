/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    // Remainder aur uske pehle index ko store karne ke liye 
    let remainderMap = new Map(); 

    // Base case: 0 remainder index -1 par setup karte hai (edge cases handle karne ke liye)
    remainderMap.set(0, -1); 

    let runningSum = 0; 
    
    for(let i = 0; i < nums.length; i++) {
        runningSum += nums[i];

        let remainder = runningSum % k;  

        // Negative number handle karne ke liye (js safe check); 
        if(remainder < 0) remainder += k; 

        if(remainderMap.has(remainder)) {
            // Check karein ki subarray ki lengtha atleast 2 hai ya nhi 
            if(i - remainderMap.get(remainder) >= 2) {
                return true; 
            }
        } else {
            // Remainder pehli baar mila hai, toh uski index store kar lein 
            remainderMap.set(remainder, i)
        }
    }

    return false; 
};