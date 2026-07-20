/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.n = nums.length; 
    // agar n 0 ke equal hota hai toh matlab tree nhi bana hai
    if(this.n === 0) return 0; 
    this.tree = new Array(4 * this.n).fill(0); 
    // tree banane ke liye function call kiya
    // aur saman diyya 
    this.buildTree(nums, 1, 0, this.n - 1); 
};

NumArray.prototype.buildTree = function(nums, node, start, end) {
    // base case: agar mera start index aur end index barabar hote hai toh 
    // matlab yeh hai ki leaf node me hai 
    if(start === end) {
        this.tree[node] = nums[start] 
        return; 
    }

    // mid value nikalkar tree ko 2 hisso me divide kar denge
    let mid = Math.floor(start + (end - start) / 2); 

    // left hisse ke liye
    this.buildTree(nums, 2 * node, start, mid); 
    this.buildTree(nums, 2 * node + 1, mid + 1, end); 

    // KYUN? dono bacho ka tree banane ke baad, Manager (current node) ka 
    // sum = left Child + Right Child
    this.tree[node] = this.tree[2 * node] + this.tree[2 *  node + 1]; 
}

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.updateTree(1, 0, this.n - 1, index, val); 
};

NumArray.prototype.updateTree = function(node, start, end, index, val) {
    if(start === end) { 
        this.tree[node] = val; 
        return; 
    }

    let mid = Math.floor(start + (end - start) / 2); 

    if(index <= mid) this.updateTree(node * 2, start, mid, index, val); 
    else this.updateTree(node * 2 + 1, mid + 1, end, index, val);

    return this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];  
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.queryTree(1, 0, this.n - 1, left, right)
};

NumArray.prototype.queryTree = function (node, start, end, left, right) {
    // case 1: No overlap (bilkul alag range) 
    // kyun? agar poori range hamari query se bahar hai, toh waha se sum 0 milega
    if(right < start || end < left) {
        return 0; 
    }

    // Case 2: Total Overlap (poora manager hamari range ki andar hai)
    if(left <= start && end <= right) {
        return this.tree[node]; 
    }

    // case 3: Partial Overlap (aadha manager kaam ka hai, aadha nhi) 
    let mid = Math.floor(start + (end - start) / 2); 
    let leftSum = this.queryTree(node * 2, start, mid, left, right); 
    let rightSum = this.queryTree(node * 2 + 1, mid + 1, end, left, right);

    return leftSum + rightSum; 
}

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */