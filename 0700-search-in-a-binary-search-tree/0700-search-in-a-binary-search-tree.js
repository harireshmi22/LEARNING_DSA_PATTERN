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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // root is null -> return false

    if(root === null) return null; 

    // if root has key -> return true; 
    if(root.val === val) return root; 

    if(val > root.val) return searchBST(root.right, val); 

    return searchBST(root.left, val)
};