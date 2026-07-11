/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    // first humne nums se max number nikala
    let max = Math.max(...nums)

    // then sum ko 0 se initialize kiya 
    let sum = 0; 

    // jab tak k > 0 se bada hai 
    // tab tak chalega while
    while(k > 0) {

        // add kiya max sum ko zero ke saath
        // then uske baad max ko 1 increase according to the question
        // if max = 5, then it will be 6 now 
        // k is 3 time then it will be k = 2 now 
        sum += max; 
        max++; 
        k--
    }

    return sum; 
};