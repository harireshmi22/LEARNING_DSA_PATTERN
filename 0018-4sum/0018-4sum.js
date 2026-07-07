/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = [];
    let n = nums.length;
    if (!nums || nums.length < 4) return res;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        // skip duplicate values for the first element to ensure uniqueness 
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Pruning 1: The minimum possible sum starting with nums[i] exceeds target 
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;

        // Pruning 2: The maximum possible sum staring with nums[i] is less than target 
        if (nums[i] + nums[n - 3] + nums[n - 2] + nums[n - 1] < target) continue;


        for (let j = i + 1; j < n - 2; j++) {
            // skip duplicate values for the second element
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;


            // Pruning 3: The minimum possible sum with nums[i] and nums[j] exceeds target
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;

            // Pruning 4: The maximum possible sum with nums[i] and nums[j] is less the target 
            if (nums[i] + nums[j] + nums[n - 2] + nums[n - 1] < target) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);

                    // skip duplicates for the third and fourth elements
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--



                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return res;
};