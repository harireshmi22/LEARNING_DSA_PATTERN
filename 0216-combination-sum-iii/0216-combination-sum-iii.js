/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let result = [];

    function backTracking(index, currentPath, target) {

        // Base Condition: Agar length k ho gayi
        if (currentPath.length === k) {
            // Agar remaining target 0 hai, matlab sum 'n' ke barabar mil gaya
            if (target === 0) {
                result.push([...currentPath]);
            }

            return; // Wapas pichhe lauto (backtrack); 
        }

        // Loop startIndex se shuru hoga taaki numbers repeat na ho (1 to 9)
        for (let i = index; i <= 9; i++) {

            // Optimizaton: Agar current number baaki bache target se bada hai, toh aage skip kar do
            if (i > target) break;

            currentPath.push(i);

            // Next element ke liye index (i + 1) aur target ko reduce karke bhejenge 
            backTracking(i + 1, currentPath, target - i);

            currentPath.pop(); // Backtrack step
        }
    }

    backTracking(1, [], n);
    return result;
};