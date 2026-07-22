/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length; 
    const res = new Array(n).fill(1); 

    // step 1: Left Pass (prefix Product)
    // res [i] mein index i ka left waale sabhi numbers ka product hoga 
    let leftProduct = 1; 
    for(let i = 0; i < n; i++) {
        res[i] = leftProduct;
        leftProduct *= nums[i] 
    }

    // step 2: Right pass (suffix Product) 
    // Peeche se aate hue rightProduct ko result array ke saath multiply karenge 
    let rightProduct = 1; 
    for(let i = n - 1; i >= 0; i--) {
        res[i] *= rightProduct; 
        rightProduct *= nums[i]
    }

    return res; 
};