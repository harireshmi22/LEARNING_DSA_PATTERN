/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {

    let low = 0, high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2); 

        // mid ko hamesha even index par bana do check karne ke liye
        if(mid % 2 === 1) mid--;  

        // agar mid aur mid + 1 equal hai 
        // matlab abhi tak sab normal pair me chal rha hai (Even, odd) 
        // toh single element righ side mein hoga

        if(nums[mid] === nums[mid + 1]) {
            low = mid + 2; 
        } else {
            // pair toot gaya, matlab single element left side (ya mid par ) hai 
            high = mid
        }
    }

    return nums[low]; 
};