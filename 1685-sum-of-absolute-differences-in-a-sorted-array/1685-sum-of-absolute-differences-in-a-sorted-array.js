/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    const n = nums.length;

    // step 1: Calculate total sum of the array 
    let totalSum = 0;

    for (let num of nums) {
        totalSum += num;
    }

    let leftSum = 0;
    const result = new Array(n);

    // step 2: Single paas to computer to result for each index 
    for (let i = 0; i < n; i++) {
        // element strictly to the right sum up to totalSum - leftSum - currentElement
        let rightSum = totalSum - leftSum - nums[i];

        let leftCount = i;
        let rightCount = n - 1 - i;

        let leftDiff = (leftCount * nums[i]) - leftSum;
        let rightDiff = rightSum - (rightCount * nums[i]);

        result[i] = leftDiff + rightDiff;

        // Update leftSum for the next index 
        leftSum += nums[i]
    }

    return result;
};