/**
 * @param {number[]} nums
 * @return {number}
 */

function robAmount(nums, idx, end, memo) {
    if(idx > end) return 0; 
    if(memo[idx] !== undefined) return memo[idx]; 

    let pick = nums[idx] + robAmount(nums, idx + 2, end, memo); 
    let notPick = robAmount(nums, idx + 1, end, memo); 

    return memo[idx] = Math.max(pick, notPick); 
}

var rob = function(nums) {
    let n = nums.length; 
    if(n === 1) return nums[0]; 
    let dp1 = []; 
    let dp2 = []; 

    let case1 = robAmount(nums, 0, n - 2, dp1)
    let case2 = robAmount(nums, 1, n - 1, dp2)

    return Math.max(case1, case2)
};

