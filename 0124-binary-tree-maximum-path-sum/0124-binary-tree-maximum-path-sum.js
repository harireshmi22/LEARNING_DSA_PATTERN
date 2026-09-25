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
var maxPathSum = function (root) {
    let max_sum = -Infinity;

    function dfs(node) {
        if(!node) return 0; 

        let leftGain = Math.max(dfs(node.left), 0)
        let rightGain = Math.max(dfs(node.right), 0); 

        max_sum = Math.max(max_sum, node.val + leftGain + rightGain); 

        return node.val + Math.max(leftGain, rightGain); 
    }
 
    dfs(root); 
    return max_sum; 
};