/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    // Technique 1: Two Pointers with Extra Array - Most Common

    let n = nums.length; 
    let posIndex = 0; 
    let negIndex = 1; 
    let arr = new Array(n)


    for(let num of nums) {
        // if num is greater than negative value, increase by 2
        // because of index position: posIndex = 0, 2, 4
        // and negIndex = 1, 3, 5, we will replace the negative value with negIndex
        if(num > 0) {
            arr[posIndex] = num; 
            posIndex += 2;
        } else {
            arr[negIndex] = num; 
            negIndex += 2; 
        }
    }
    return arr
};