/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {

    /*
    function count(nodes) {
        if (nodes <= 1) return 1;
        let total = 0; 

        for (let root = 1; root <= nodes; root++) {

            const left = count(root - 1);
            const right = count(nodes - root); 

            total += left * right; 
        }

        return total; 
    }

    return count(n);

    Time limit exceed
    */
    

    const memo = new Array(n + 1).fill(-1); 

    function count(nodes) {
        if(nodes <= 1) return 1; 

        if(memo[nodes] !== -1) return memo[nodes]; 

        let total = 0; 

        for(let i = 1; i <= nodes; i++) {
            
            const left = count(i - 1);
            const right = count(nodes - i); 

            total += left * right;  
        }

        memo[nodes] = total; 

        return total
    }

    return count(n); 
};