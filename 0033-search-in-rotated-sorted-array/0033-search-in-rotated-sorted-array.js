/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length - 1; 
    let left = 0; 
    let right = n; 

    while(left <= right) {
        let mid = Math.floor((right + left) / 2); 

        if(nums[mid] === target) {
            return mid; 
        }

        // Left half is sorted 
        if(nums[left] <= nums[mid]) {
            if(target >= nums[left] && target < nums[mid]) {
                right = mid - 1; 
            } else {
                left = mid + 1; 
            }
        } else {
            // right half is sorted 
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            }else {
                right = mid - 1; 
            }
        }
    }

    return -1; 
};