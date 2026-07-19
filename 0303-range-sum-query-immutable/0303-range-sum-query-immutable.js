/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let sum = 0; 
    // "let prefix" ki jagah 'this.prefix' use karenge 
    // taki sumRange isko dekh sakte 
    this.prefix = []; 

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]; 
        this.prefix.push(sum)
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left === 0) return this.prefix[right]; 

    return this.prefix[right] - this.prefix[left - 1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */