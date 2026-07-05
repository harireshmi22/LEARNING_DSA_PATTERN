/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // pehele array ko sort karte hai 
    // negative aage aajyengi and positive baad me 

    // Js me default sort string wala hota hai, isliye (a - b)
    nums.sort((a, b) => a - b);
    const n = nums.length
    const res = []


    for (let i = 0; i < n - 2; i++) {
        // Early break: agar sabse chhota number > 0, sum 0 kabhi 
        // nhi banega 

        if (nums[i] > 0) break;

        // i ka duplicate skip karo 
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];

            if (total === 0) {
                res.push([nums[i], nums[left], nums[right]]);

                // left aur right ke duplicate ko skip karo 
                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++
                right--;
            } else if (total < 0) {
                left++; // sum badhana hai
            } else {
                right--; // sum kam karna hai 
            }
        }

    }
    return res;
};