/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length; 
    let left = 0, right = n - 1; 

    while(left < right) {
        let mid = Math.floor(left + (right - left) / 2); 

        // Agar mid ki value array ke end(right) se badi hai,
        // iska matlab minimum element right side me chhupa hai
        if(nums[mid] > nums[right]) {
            left = mid + 1;  
        }

        // Agar mid chhota ya barabar hai, 
        // toh minimum left side me hai (ya mid khud hai)
        else {
            right = mid; 
        }
    }

    // Loop khatam hone par left == right hoga, 
    // jo ki sabse chote element ka index hai. 
    return nums[right]
};