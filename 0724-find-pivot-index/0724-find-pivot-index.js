/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0; 
    let totalSum = 0; 
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i]; 
    }

    for(let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i]; 

        if(leftSum === rightSum) {
            return i; 
        }

        leftSum += nums[i]
    }

    return -1; 
};