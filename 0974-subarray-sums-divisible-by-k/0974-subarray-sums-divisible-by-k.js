/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    // Array to store frequency of remainders (0 to k - 1) 
    const remainderCount = new Array(k).fill(0); 

    // Base case: Remainder 0 initially occurs once (for sum = 0); 
    remainderCount[0] = 1; 

    let currentSum = 0; 
    let totalSubarray = 0; 

    for(let num of nums) {
        currentSum += num;

        // Correct positive remainder formula for js 
        let rem = ((currentSum % k) + k) % k; 

        // Agar yeh remainder pehle aaya hai, toh utne hi valid subarrays mile 
        totalSubarray += remainderCount[rem]; 

        // Current remainder ki frequency increment karo
        remainderCount[rem]++; 
    }  

    return totalSubarray; 
};