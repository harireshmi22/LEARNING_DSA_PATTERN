/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    // pehele ek frequency map banao usko set karo values ke saath 

    if(nums1.length > nums2.length) {
        return intersect(nums2, nums1); 
    }  

    let counts = new Map(); 
    for(let num of nums1) {
        counts.set(num, (counts.get(num) || 0) + 1); 
    }

    let result = []; 
    for(let num of nums2) {
        let count = counts.get(num) || 0; 

        if(count > 0) {
            result.push(num); 
            counts.set(num, count - 1); 
        }
    }

    return result; 
};