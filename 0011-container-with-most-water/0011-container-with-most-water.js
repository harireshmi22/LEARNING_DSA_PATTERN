/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length - 1; 
    let i = 0; 
    let j = n;
    let maxArea = 0; 

    while(i < j) {
        // first of all, we need minimum height 
        // then we compare with the js method 

        // height[0] = 1 and height[8] = 7, so 1 is the minimum
        let currentHeight = Math.min(height[i], height[j]); 

        // we need the with of container 
        let width = j - i; // 8 - 0 = 8

        // now we have to calculate the area 
        let area = currentHeight *  width; 

        // after calculating area, then we have to compare the area 
        // the update the max area 
        maxArea = Math.max(maxArea, area) // (0, 8) = (1, 7) = 7 update 7 in the max area 

        // if the value is less than the j increase i pointer 
        // if the value is greater than j then decrease the j 
        // because there is not greater value in the j, j is the end of the arr 

        if(height[i] < height[j]) i++
        else j--
    } 

    return maxArea; 
};