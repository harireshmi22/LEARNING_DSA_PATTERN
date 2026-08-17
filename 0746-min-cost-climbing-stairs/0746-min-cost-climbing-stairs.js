/**
 * @param {number[]} cost
 * @return {number}
 */



function minCost(cost, idx, memo, n) {
    if(idx >= n) return 0; 

    if(memo[idx] != undefined) return memo[idx]; 

    return memo[idx] = cost[idx] + Math.min(minCost(cost, idx + 1, memo, n), minCost(cost, idx + 2, memo, n)); 
}

var minCostClimbingStairs = function(cost) {
    let n = cost.length; 
    let memo = []; 
    return Math.min(minCost(cost, 0, memo, n), minCost(cost, 1, memo, n));    
};
