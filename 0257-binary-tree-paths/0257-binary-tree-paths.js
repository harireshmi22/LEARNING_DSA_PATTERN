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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let result = [];

    function dfs(node, path) {
        if (node === null) return;

        path += node.val; 

        // leaf 
        if(node.left === null && node.right === null) {
            result.push(path); 
            return;  
        }

        path += "->"; 

        dfs(node.left, path); 
        dfs(node.right, path); 
    }

    dfs(root, ""); 

    return result; 
};