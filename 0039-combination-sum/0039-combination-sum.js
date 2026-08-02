/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {

    // ek result array banaya jisme store karenge 
    // copy value of current path
    let result = [];

    function backTracking(index, currentPath, currentTarget) {

        // target ko minus karke karke 0 hone par result me puush 
        // karenge numbers ko
        if (currentTarget === 0) {
            result.push([...currentPath]); // copy karke push kardo
            return;
        }

        // base case 2: agar negative ho toh return kar dnea
        // aage badhnae ki jarurat nhi hai 
        if(currentTarget < 0) return; 

        for (let i = index; i < candidates.length; i++) {
            // current index ki value push karo 
            currentPath.push(candidates[i]);

            // phir call karo function ko 
            backTracking(i, currentPath, currentTarget - candidates[i]);
            
            currentPath.pop();
        }
    }

    backTracking(0, [], target)
    return result;

};