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
var preorderTraversal = function(root) {
    let result = []; 

    function preOrder(root) {

        if(!root) return; 
        result.push(root.val); 
        preOrder(root.left); 
        preOrder(root.right); 
    }

    preOrder(root)
    return result; 
};