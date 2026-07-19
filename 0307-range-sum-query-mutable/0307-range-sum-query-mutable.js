/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    // Original nums ko v save kar rhe hai taaki update ki waqt purani value mil sake 
    this.nums = nums; 
    let sum = 0;
    this.prefix = []; 
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        this.prefix.push(sum)
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    // 1. pata kari ki uss jagah pehle kya value hai 
    let oldValue = this.nums[index]

    // 2. Calculate karo ki kitne ka farq difference aaya hai 
    let diff = val - oldValue; 

    // 3. Original array me value ko update kar do taaki agli baar 
    // ke liye yaad rahe 
    this.nums[index] = val; 

    // 4. us index se lekar aakhri tak ke saare prefix sume me 
    // diff ko add kardo
    for(let i = index; i < this.prefix.length; i++) {
        this.prefix[i] += diff; 
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left === 0) return this.prefix[right]; 

    return this.prefix[right] - this.prefix[left - 1]; 
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */