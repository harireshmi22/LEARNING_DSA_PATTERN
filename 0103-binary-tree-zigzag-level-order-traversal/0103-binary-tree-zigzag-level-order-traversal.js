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
var zigzagLevelOrder = function (root) {

    if (root === null) return [];

    let q = [root];
    let result = [];
    let leftToRight = true;

    while (q.length > 0) {
        let levelSize = q.length;
        let level = [];

        for (let i = 0; i < levelSize; i++) {
            let node = q.shift();

            level.push(node.val);

            if (node.left) q.push(node.left);

            if (node.right) q.push(node.right);
        }

        if (!leftToRight) level.reverse();
        result.push(level); 

        leftToRight = !leftToRight; 
    }

    return result; 
};