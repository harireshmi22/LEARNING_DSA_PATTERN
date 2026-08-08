/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {

    let n = nums.length;
    let low = 0, high = n - 1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        // target mil gaya 
        if (nums[mid] === target) return true;

        // Duplicate elements ka edge case 
        if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
            low++;
            high--;
            continue;
        }

        // check if left half is sorted 
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1; // left half mein search karo 
            } else {
                low = mid + 1; // Right half me search karo 
            }
        } else {

            // Right half is sorted 
            if(nums[mid] < target && target <= nums[high]) {
                low = mid + 1; // right half me search karo 
            } else {
                high = mid - 1; // left half me search karo 
            }
        }
    }

    return false; 
};