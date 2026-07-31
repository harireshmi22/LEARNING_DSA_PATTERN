/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = []; // for saving the data 

    // sort karo pehele array ko 
    nums.sort((a, b) => a - b)

    function backTracking(index, currentSubset) {
        result.push([...currentSubset]);

        for (let i = index; i < nums.length; i++) {

            if (i > index && nums[i] === nums[i - 1]) continue;

            currentSubset.push(nums[i]);

            backTracking(i + 1, currentSubset);

            currentSubset.pop();
        }
    }

    backTracking(0, []);
    return result;
};