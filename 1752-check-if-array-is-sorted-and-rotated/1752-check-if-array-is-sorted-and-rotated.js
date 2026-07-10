/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let n = nums.length; 
    let count = 0; 

    // array ko traverse kiya pura 
    for(let i = 0; i < n; i++) {
        if(nums[i] > nums[(i + 1) % n]) {
            count++
        }

        // we are using breaking point concept 
        // jab tumhara sorted array rotate hota hai toh usme 
        // ek concept pattern hota hai jiske through tum pata laga lete ho ki yeh 
        // rotate hai ki nhi, jab tumhara i greater hota hai tumhare i + 1 se toh tumhara sorted array 
        // rotate hai lekin woh break point 1 time hota hai means 1 se jyaada agar hua toh 
        // woh sorted array nhi tha 
        if(count > 1) {
            return false; 
        }
    }

    return true; 
};