/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // Monotonic stack + HashMap
    const stack = [];
    const nextGreatMap = new Map();

    for (const num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            const smallerNum = stack.pop();
            nextGreatMap.set(smallerNum, num);
        }

        stack.push(num);
    }

    // nums1 ke elements ka answer map se directly O(1) me find karna 
    return nums1.map(num => nextGreatMap.get(num) ?? -1);
};