/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []; 

    function backTrack(start, current) {
        result.push([...current]); 

        for(let i = start; i < nums.length; i++) {
            current.push(nums[i]); 

            backTrack(i + 1, current); 

            current.pop(); 
        }           
    }

    backTrack(0, [])
    return result; 
};