/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {

        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > nums[right]) {
            // Min definitely right side me hai
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            // Min left side me hai ya mid khud hai
            right = mid;

        } else {
            // nums[mid] === nums[right]
            // hum sure nhi hai, isliye bas right pointer ko ek step piche le lo
            right--;
        }
    }

    return nums[left]; 
};