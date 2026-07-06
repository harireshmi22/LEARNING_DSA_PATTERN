/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let n = nums.length;
    let positive = [];
    let negative = [];

    let squareArray = [];
    let idx = 0;
    let i = 0;
    let j = 0;

    // divide the array into 2 side 
    // 1. positive 
    // 2. negative

    // if negative and positive there 
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            negative.push(nums[i]);
        } else {
            positive.push(nums[i]);
        }
    }



    // if there is no positive value, 
    // only negative
    if (negative.length === 0) {
        for (let i = 0; i < positive.length; i++) {
            positive[i] = positive[i] * positive[i];
        }
        return positive
    }

    // if there is no negative value, 
    // only positive value
    if (positive.length === 0) {
        for (let i = 0; i < negative.length; i++) {
            negative[i] = negative[i] * negative[i];
        }

        return negative.reverse();
    }


    for (let i = 0; i < negative.length; i++) {
        negative[i] = negative[i] * negative[i];
    }

    negative.reverse()

    for (let i = 0; i < positive.length; i++) {
        positive[i] = positive[i] * positive[i];
    }

    // merge 2 divided array into single array 

    while (i < negative.length && j < positive.length) {
        if (negative[i] <= positive[j]) squareArray[idx++] = negative[i++]
        else squareArray[idx++] = positive[j++];
    }

    while (i < negative.length) {
        squareArray[idx++] = negative[i++];
    }

    while (j < positive.length) {
        squareArray[idx++] = positive[j++];
    }

    return squareArray;
};