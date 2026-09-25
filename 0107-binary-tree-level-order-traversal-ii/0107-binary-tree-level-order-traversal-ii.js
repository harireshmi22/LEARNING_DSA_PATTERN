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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {

    if (root === null) return [];
    let q = [root]
    let result = []; 

    while(q.length > 0) {
        let len = q.length; 
        let currentLevel = []; 

        for(let i = 0; i < len; i++) {
            const node = q.shift(); 
            currentLevel.push(node.val); 

            if(node.left) q.push(node.left); 
            if(node.right) q.push(node.right); 
        }

        result.push(currentLevel); 
    }

    return result.reverse(); 
};