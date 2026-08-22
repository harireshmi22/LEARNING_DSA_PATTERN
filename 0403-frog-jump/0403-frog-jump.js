/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    const n = stones.length;

    // pehle jump hamesha 1 unit ka hona mandatory hai 
    if (stones[1] - stones[0] !== 1) {
        return false;
    }

    // O(1) me stone exist karta hai ya nhi check karne ke liye Set
    const stoneSet = new Set(stones); 
    const target = stones[n - 1]; 

    // Visited / Memoization table: "currStone - prevJump" -> boolean 
    const memo = new Map(); 

    function dfs(currStone, prevJump) {
        // Base case: Target stone tak pahuch gaye
        if(currStone === target) return true; 

        // Memoization key
        const stateKey = `${currStone}-${prevJump}`; 
        if(memo.has(stateKey)) {
            return memo.get(stateKey); 
        }

        // 3 possible jumps: k - 1, k, k + 1
        for(let nextJump = prevJump - 1; nextJump <= prevJump + 1; nextJump++) {
            if(nextJump > 0) {
                const nextStone = currStone + nextJump; 

                // Agar aage valid stone hai aur DFS path mil jaate hai 
                if(stoneSet.has(nextStone)) {
                    if(dfs(nextStone, nextJump)) {
                        memo.set(stateKey, true);
                        return true; 
                    }
                }
            }
        }

        // Agar koi valid jump aage nhi le jata 
        memo.set(stateKey, false); 
        return false; 
    }

    return dfs(stones[1], 1)
};