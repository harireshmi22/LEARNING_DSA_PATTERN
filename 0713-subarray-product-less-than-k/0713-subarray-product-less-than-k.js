/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0; 

    let count = 0; 
    let prod = 1; 
    let left = 0; 

    for(let right = 0; right < nums.length; right++){
        prod *= nums[right]; 

        // Agar product >= k ho gaya, toh window shrink karo 
        while(prod >= k) {
            prod /= nums[left];
            left++; 
        }

        // Valid window mil gayi, right par end hone waale subarrays add karo 
        count += (right - left + 1); 
    }

    return count; 
};