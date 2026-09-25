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
var minDepth = function(root) {
    
    if(root === null) return 0; 

    // Only right subtree exists 
    if(!root.left) return 1 + minDepth(root.right); 

    // Only left subtree exists 
    if(!root.right) return 1 + minDepth(root.left); 

    // Both children exists
    let left = minDepth(root.left); 
    let right = minDepth(root.right); 

    return 1 + Math.min(left, right); 
};