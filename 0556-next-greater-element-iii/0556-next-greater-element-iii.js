/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
    // sabse pehele n ko string me convert karke split kar diya
    let digits = n.toString().split("");

    // use baad uski length nikali
    let len = digits.length;

    // step 1: right side se pehele decreasing element(dip) dhundho
    let i = len - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) i--;
    // Agar pura number decreasing order me hai (jaise 4321), koi next greater element nhi ban sakta hai
    if (i < 0) return -1;

    // Step 2: Right side digit[i] se just bada number dhundho
    let j = len - 1;
    while (j >= 0 && digits[j] <= digits[i]) j--;
    
    // Step 3: swap karo i aur j ko 
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // Step 4: Index (i + 1) se end tak reverse karo
    let left = i + 1, right = len - 1;
    while (left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]];
        left++;
        right--;
    }

    const ans = parseInt(digits.join(""));
    const MAX_32_BIT_INT = 2147483647; // 2^31 - 1; 

    return ans > MAX_32_BIT_INT ? -1 : ans;
};