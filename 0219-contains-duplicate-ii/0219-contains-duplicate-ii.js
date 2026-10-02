/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let window = new Set();

    for (let i = 0; i < nums.length; i++) {
        // window ka size k se bada hogaya toh peeche walaa hata do 
        if(window.size > k) {
            window.delete(nums[i - k - 1]); 
        }

        if(window.has(nums[i])) {
            return true; 
        }

        window.add(nums[i]); 
    }

    return false; 
};