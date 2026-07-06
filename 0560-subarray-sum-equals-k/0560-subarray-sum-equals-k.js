/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    // prefix technique
    let n = nums.length;
    let count = 0;
    let currentSum = 0;
    let prefixSum = [];

    for (let i = 0; i < n; i++) {
        currentSum += nums[i];
        prefixSum[i] = currentSum;
    }

    // count subarrays
    for (let i = 0; i < prefixSum.length; i++) {
        // base case 
        if (prefixSum[i] === k) count++;

        for(let j = 0; j < i; j++)
        if(prefixSum[i] - prefixSum[j] === k) count++
    }

    return count;

};