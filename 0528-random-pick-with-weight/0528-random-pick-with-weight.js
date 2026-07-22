/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefixSum = []; 
    let runningSum = 0; 

    for(let weight of w) {
        runningSum += weight; 
        this.prefixSum.push(runningSum); 
    }

    this.totalSum = runningSum; 
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    // Step 2: 1 se totalSum ka beech ka random number select karna 
    const target = Math.floor(Math.random() * this.totalSum) + 1; 

    // step 3: Prefix sum array par binary search lagana 
    let left = 0; 
    let right = this.prefixSum.length - 1; 

    while(left < right) {
        let mid = Math.floor(left + (right - left) / 2); 

        if(this.prefixSum[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid; 
        }
    }

    return left; 
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */