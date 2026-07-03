/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    let n = nums.length;
    if (n === 1) return nums[0];

    // current variable holds the 
    // values of the nums
    let current = nums;

    // jabtak currennt length 1 ke barabar na ho jaaye 
    // jaise hai 1 ke equal ho jaaye waise hi terminate karo 
    // and result return means current index ki value
    while (current.length > 1) {
        const newNums = [];

        for (let i = 0; i < current.length - 1; i++) {
            const sum = (current[i] + current[i + 1]) % 10;
            newNums.push(sum)
        }

        current = newNums; // purane ko naye se replace karo
    }
    return current[0];  // last bacha hua element 
};