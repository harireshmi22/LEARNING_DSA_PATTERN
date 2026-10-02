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
var diameterOfBinaryTree = function (root) {

    let dia = 0;

    function diameter(node) {

        if (node === null) return 0;
        let leftDiam = diameter(node.left);
        let rightDiam = diameter(node.right);


        dia = Math.max(dia, leftDiam + rightDiam)

        return 1 + Math.max(leftDiam, rightDiam);
    }

    diameter(root)
    return dia
};