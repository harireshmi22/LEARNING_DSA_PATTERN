/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    // Pehele me sort kiya array ko
    nums.sort((a, b) => a - b);
    
    // store the closest sum and 
    // calculate with current sum 
    // and replace with closestsum
    let closestSum = nums[0] + nums[1] + nums[2];

    
    for (let i = 0; i < nums.length - 2; i++) {
        // left = 1
        let left = i + 1;
        // right = last element
        let right = nums.length - 1;

        // until left is less than right 
        // loop the cycle 
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right]

            // calculate the closest sum for the target 
            // and update the closest sum with currentSum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum === target) return currentSum
            // if current Sum is less then left ++
            if (currentSum < target) left++
            else right--;

        }

    }
    return closestSum;
};