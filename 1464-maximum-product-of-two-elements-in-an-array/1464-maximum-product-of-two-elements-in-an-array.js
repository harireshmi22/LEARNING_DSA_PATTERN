/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let max1 = 0; 
    let max2 = 0; 

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max1) {
            max2 = max1; // old highest become second largest number
            max1 = nums[i];  // New highest
        } else if (nums[i] > max2) {
            max2 = nums[i];  // Only second highest get updated
        }
    }

    return (max1 - 1) * (max2 - 1); 
};