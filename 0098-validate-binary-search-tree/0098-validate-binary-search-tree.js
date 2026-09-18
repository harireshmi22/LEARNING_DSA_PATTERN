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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    function validate(node, min, max) {
        // Empty tree is valid 
        if(node === null) return true; 

        // Node must be inside allowed range 
        if(node.val <= min || node.val >= max) return false; 

        // Left subtree: values must be smaller 
        // Right subtree: values must be greater 

        return (
            validate(node.left, min, node.val) && 
            validate(node.right, node.val, max) 
        )
    }

    return validate(root, -Infinity, Infinity); 
};