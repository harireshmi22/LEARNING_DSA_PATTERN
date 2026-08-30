/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */

var solve = function(i, j, cuts, dp) {

    // base case: Agar boundaries ke beech koi cut ke liye jagah nhi hai
    if(j - i <= 1) return 0; 

    // Pehle se calculated state return karo (Memoization check) 
    if(dp[i][j] !== -1) return dp[i][j]; 

    let minCost = Infinity; 

    // Har ek possible cut position (k) ko try karo 

    for(let k = i + 1; k < j; k++) {
        const currentSegmentLength = cuts[j] - cuts[i]; 
        const leftCost = solve(i, k, cuts, dp); 
        const rightCost = solve(k, j, cuts, dp); 

        const totalCost = currentSegmentLength + leftCost + rightCost; 
        minCost = Math.min(minCost, totalCost); 
    }

    // Result store karke return karo 
    dp[i][j] = minCost; 
    return dp[i][j]; 
}


var minCost = function(n, cuts) {

    const sortedCuts = [...cuts].sort((a, b) => a - b); 

    // 2. Boundaries (0 aur n) add karo 
    allCuts = [0, ...sortedCuts, n]
    const m = allCuts.length; 

    // 3. DP table initialize karo (-1 se fill)
    const dp = Array.from({length: m}, () => Array(m).fill(-1)); 

    // 4. ek helper function banaya 
    return solve(0, m - 1, allCuts, dp)
};