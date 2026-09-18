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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = []; 

    function inorder(node) {
        if(node === null) return; 

        // 1. Left 
        inorder(node.left); 

        // 2. Root
        result.push(node.val); 

        // 3. Right 
        inorder(node.right);  
    }

    inorder(root); 

    return result; 
};