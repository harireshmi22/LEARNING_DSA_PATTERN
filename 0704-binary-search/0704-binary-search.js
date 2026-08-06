/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1; 

    while(low <= high) {
        
        let mid = Math.floor(low + (high - low) / 2); 

        if(nums[mid] === target) return mid; 

        // agar target mid se bada hai toh right side search kare
        if(nums[mid] < target) {
            low = mid + 1; // right side me search kare 
        } else if(nums[mid] > target) {
            high = mid - 1; 
        }
    }

    return -1
};