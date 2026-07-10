/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let first = -1;
    let last = -1;
    // find first occurance  
    let left = 0; right = nums.length - 1; 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        if (nums[mid] === target) {
            first = mid
        }
    }

    // find last occurance 
    left = 0; right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        if (nums[mid] === target) {
            last = mid
        }
    }

    return [first, last]
};