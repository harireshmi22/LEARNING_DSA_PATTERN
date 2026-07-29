/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
    let n = nums.length;
    let minSum = Infinity;


    for (let k = l; k <= r; k++) {
        let windowSum = 0;

        for (let i = 0; i < k; i++) {
            windowSum += nums[i]
        }

        // window me positive milta hai toh min sum nikalo 
        if (windowSum > 0) {
            minSum = Math.min(minSum, windowSum)
        }

        // 2. Window ko array ke aage slide karna 
        for (let i = k; i < n; i++) {
            windowSum += nums[i]; // slide ke aage waale element ko add kiya 
            windowSum -= nums[i - k]; // slide ke pichhe waale element ko remove kar diya 

            if (windowSum > 0) {
                minSum = Math.min(minSum, windowSum)
            }
        }

    }

    return minSum === Infinity ? -1 : minSum;
};