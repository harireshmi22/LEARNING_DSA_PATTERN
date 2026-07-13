/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let n = nums.length; 
  let low = 0;
  let mid = 0; 
  let high = n - 1;  
 
  // Dutch National Flag (3 pointer) Algorithm 

    while(mid <= high) {
        if(nums[mid] === 0) {
            // 0 ko low pointer waale element se swap karo 
            [nums[low], nums[mid]] = [nums[mid], nums[low]]; 
            low++; 
            mid++; 
        } else if(nums[mid] === 1) {
            // 1 ke case me sirf aage badhe 
            mid++; 
        } else {
            // 2 ko high pointer waale elemennt se swap karein 
            [nums[mid], nums[high]] = [nums[high], nums[mid]]; 
            high--; 
        }
    }

  return nums; 
};