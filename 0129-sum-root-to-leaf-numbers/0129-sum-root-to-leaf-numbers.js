/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    
    function dfs(root, currentNumber) {

        if(root === null) return 0; 

        // Build the number
        currentNumber = currentNumber * 10 + root.val; 

        // leaf node 
        if(root.left === null && root.right === null) return currentNumber; 

        // Explore both paths 
        return dfs(root.left, currentNumber) + dfs(root.right, currentNumber); 
    }

    return dfs(root, 0); 
};