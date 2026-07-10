/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    let k = 0; 

    for(let i = 0; i < nums.length; i++) {
        // jo element val ke equal nhi hai uske exchange karo 
        if(nums[i] !== val) {
            nums[k] = nums[i];
            k++ // aur pointer ko badhaoo 
        }
    }
    
    return k; 
};