/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length; 

    // Step 1: Pivot dhoondo - peeche se 
    let i = n - 2; 
    while(i >= 0 && nums[i] >= nums[i + 1]) {
        i--; 
    }


    // Agar pivot mil gaya 
    if(i >= 0) {
        // Step 2: Pivot se bada element peeche se dhoondo 
        let j = n - 1; 
        while(nums[j] <= nums[i]) {
            j--; 
        }

        // Step 3: Swap 
        [nums[i], nums[j]] = [nums[j], nums[i]]; 
    }

    // Step 4: i ke baad waala part reverse kardo 
    // Agar i = -1 hai matlab pura array hi decreasing tha
    // toh pura array reverse hoke sabse chhota ban jaaye 
    let left = i + 1; 
    let right = n - 1; 
    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]; 
        left++; 
        right--; 
    }
};