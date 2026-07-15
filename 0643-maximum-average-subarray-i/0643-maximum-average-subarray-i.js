/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0; 
    let left = 0; 
    let result = []
    let maxAverage = -Infinity; 

    for(let i = 0; i < nums.length; i++) {
        // add the next element
        sum += nums[i]

        // slide the window forward 
        // we don't need to slide if we have not hit the required window size of k
        if(i >= k - 1) {
            // we are automatically returning the window average once we hit the window
            // size of k 
            let currentAverage = sum / k
        
            maxAverage = Math.max(maxAverage, currentAverage); 

            // substracting the window forward 
            sum -= nums[left]

            // then sliding the window forward 
            left++; 

            // adding the element coming in, in the outer/previous loop
            // and repeating this process until we hit the end of the array 
        }
    }
    
    return maxAverage; 
};