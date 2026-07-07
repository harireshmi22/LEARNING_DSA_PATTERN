/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length - 1; 
    let leftMax = height[0]; 
    let rightMax = height[n]; 

    let i = 0; 
    let j = n;

    let totalWater = 0;  

    while(i < j) {
        if(leftMax <= rightMax) {
            totalWater += leftMax - height[i];
            i++; 
            leftMax = Math.max(leftMax, height[i]); 
        } else {
            totalWater += rightMax - height[j];
            j--;  
            rightMax = Math.max(rightMax, height[j])
        }
    }

    return totalWater; 
};