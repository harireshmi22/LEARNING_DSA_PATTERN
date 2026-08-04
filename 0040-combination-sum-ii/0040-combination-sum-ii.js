/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = []; 

    /// sort karke duplicates find karne me easy ho jaata hai 
    candidates.sort((a, b) => a - b); 

    function backTrack(index, currentPath, target) {

        if(target === 0) {
            result.push([...currentPath]); 
            return; 
        }

        // base case 2: negative number ko handle karna 
        if(target < 0) return; 

        for(let i = index; i < candidates.length; i++) {

            if(i > index && candidates[i] === candidates[i - 1]) continue; 

            currentPath.push(candidates[i]); 

            backTrack(i + 1, currentPath, target - candidates[i]); 

            currentPath.pop(); 
        }
    }

    backTrack(0, [], target); 

    return result; 
};