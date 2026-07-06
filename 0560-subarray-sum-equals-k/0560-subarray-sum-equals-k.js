/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    // prefix technique
    let n = nums.length;
    let map = new Map();
    let count = 0;
    let currentSum = 0;

    // With the help of array TC 0(n^2) SC 0(n)
    // for (let i = 0; i < n; i++) {
    //     currentSum += nums[i];
    //     prefixSum[i] = currentSum;
    // }

    // // count subarrays
    // for (let i = 0; i < prefixSum.length; i++) {
    //     // base case 
    //     if (prefixSum[i] === k) count++;

    //     for(let j = 0; j < i; j++)
    //     if(prefixSum[i] - prefixSum[j] === k) count++
    // }



    //     Initial State (Start hone se pehle)
    // count = 0
    // currentSum = 0
    // Map: { 0: 1 } (Humne zero ko frequency 1 ke sath pehle hi daal diya hai. Yeh humesha starting base state hoti hai).


        map.set(0, 1);
    // With the help of hashmap 
    for (let i = 0; i < n; i++) {
        // base case

        currentSum += nums[i];

        if (map.has(currentSum - k)) {
            count += map.get(currentSum - k);
        }

        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }


    return count;

};