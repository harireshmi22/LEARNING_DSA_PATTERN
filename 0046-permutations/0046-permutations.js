/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];

    function backTracking(currentPath, usedSet) {

        if (currentPath.length === nums.length) {
            result.push([...currentPath]);
            return
        }

        for (let i = 0; i < nums.length; i++) {

            if (usedSet.has(i)) continue;

            currentPath.push(nums[i]);
            usedSet.add(i)

            backTracking(currentPath, usedSet);

            currentPath.pop();
            usedSet.delete(i)
        }
    }


    backTracking([], new Set())
    return result;
};