/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while(low < high) {
        // loop ke andar mid calculate karein 
        let mid = Math.floor(low + (high - low) / 2); 

        // agar mid + 1 waala element bada hota hai, 
        // toh peak right side me definitely hoga 
        if(nums[mid] < nums[mid + 1]) {
            low = mid + 1; 
        } else {

            // agar mid element bada ya barabar hai, 
            // toh peak element left side me (ya mid par hi) hoga
            high = mid; 
        }
    }

    // loop khatam hone par low aur high dono peak 
    // index par point karenge 
    return low
};