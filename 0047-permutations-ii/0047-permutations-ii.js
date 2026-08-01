/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = []; 
    // pehele sort karle nums ko hamesha duplicate 
    // find karne me easy ho jaata hai 

    nums.sort((a, b) => a - b)
    
    // ek boolean array banayenge aur false 
    let used = new Array(nums.length).fill(false)
    
    function backTracking(currentPath) {

        if(currentPath.length === nums.length) {
            result.push([...currentPath]); 
            return; 
        }

        for(let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; 
            if(used[i]) continue; 

            currentPath.push(nums[i]); 
            used[i] = true; 

            backTracking(currentPath); 

            currentPath.pop(); 
            used[i] = false; 
        }
    }
    
    backTracking([]); 
    return result; 
};