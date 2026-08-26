/**
 * @param {number[]} numWays
 * @return {number[]}
 */
var findCoins = function(numWays) {

    const n = numWays.length; 
    const dp = new Array(n + 1).fill(0); 
    dp[0] = 1; 

    const coins = []; 

    for(let coin = 1; coin <= n; coin++) {
        const target = numWays[coin - 1]; 

        // Existing ways are already more the required 
        if(dp[coin] > target) {
            return []; 
        }

        // Need exactly one extra way -> coin exists 
        if(dp[coin] + 1 === target) {
            coins.push(coin); 

            // Normal coin change dp update 
            for(let amount = coin; amount <= n; amount++) {
                dp[amount] += dp[amount - coin]; 
            }
        }

        // More than one extra way needed -> impossible 

        else if (dp[coin] !== target) {
            return []; 
        }
    }

    return coins;   
};