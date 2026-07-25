/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let count = 0; 
    let currentSum = 0; 
    let left = 0; 

    for(let right = 0; right < nums.length; right++) {
        // current element ko sum me add karo 
        currentSum += nums[right]; 
    
        // jab tak score (Sum * length) >= k ho, window ko left shrink karo 
        while(currentSum * (right - left + 1) >= k) {
            currentSum -= nums[left]; 
            left++
        }

        // valid window par right end hone waale sabhi count me add karo 
        count += (right - left + 1); 
    }

    return count
};