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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = []; 
    let path = []; 

    function dfs(node, remaining) {
        
        if(node === null) return; 

        // 1. Choose 
        path.push(node.val); 

        // 2. Check leaf 
        if(node.left === null && node.right === null && remaining === node.val) {
            result.push([...path]); 
        }

        // 3. Explore 
        dfs(node.left, remaining - node.val); 
        dfs(node.right, remaining - node.val); 

        // 4. Undo 
        path.pop(); 
    }

    dfs(root, targetSum); 

    return result; 
};