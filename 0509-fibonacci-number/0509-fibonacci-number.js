/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    let dp = [];  

    function fibo(n, dp) {
        if(n === 1) return 1; 
        if(n === 0) return 0; 

        if(dp[n] !== undefined) return dp[n]; 

        dp[n] = fibo(n - 1, dp) + fibo(n - 2, dp); 
        return dp[n];
    }

    return fibo(n, dp)
};