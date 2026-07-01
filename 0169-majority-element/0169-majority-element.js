/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let's use HashMap 

    let n = nums.length
    let freq = new Map()
    for(let i = 0; i < n; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);

        if(freq.get(nums[i]) > Math.floor(n / 2)) {
            return nums[i]
        }
    }
};