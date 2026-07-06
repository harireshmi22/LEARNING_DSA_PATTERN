/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    // prefix technique
    let n = nums.length;

    let map = new Map();

    /* Map: { 0: 1 } (Humne zero ko frequency 1 ke sath pehle hi daal diya hai. Yeh humesha starting base state hoti hai). */
    map.set(0, 1);

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

    /* Step 1: i = 0, Element = 3
    currentSum update karein: currentSum = currentSum + 3 $\rightarrow$ 0 + 3 = 3
    Target (jo map me check karna hai): Target = currentSum - k $\rightarrow$ 3 - 7 = -4
    Map Check: Kya Map ke paas -4 hai? Nahi (map.has(-4) is false). Toh count me kuch add nahi hoga (count = 0).
    Map Update: Hum currentSum (3) ko map me insert karenge. Kyunki 3 pehli baar aaya hai, iski frequency 1 set hogi.
    Map State: { 0: 1, 3: 1 } */

    // With the help of hashmap 
    for (let i = 0; i < n; i++) {

        // current sum = currentSum ki value add karo nums[i]
        currentSum += nums[i];

        // agar current - k karke jo value niklegi aur map me hai toh count ek badha do 
        if (map.has(currentSum - k)) {
            // map se 1 nikalkar add kardi
            count += map.get(currentSum - k);
        }
        
        // map me currentSum ki value and index ke saath add kardo
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }

    // count daalo 
    return count;

};