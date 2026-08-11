/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    // dp[i] will store the number of combinations that add upto sum 'i'
    let dp = new Array(target + 1).fill(0); 
    
    // base case 0 banane ka 1 tareeqa hota hai (empty set)
    dp[0] = 1; 

    // har target sum (1 to target) ke liye check karenge 
    for(let i = 1; i <= target; i++) {
        for(let num of nums) {
            // agar current number target sum se chhoota ya barabar hai
            if(i >= num) {
                dp[i] += dp[i - num]; 
            }
        }
    }

    return dp[target]; 
};