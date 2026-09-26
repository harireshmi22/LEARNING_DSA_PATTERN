/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    if(preorder.length === 0 || inorder.length === 0) return null; 
    
    // first element of preorder = root; 
    let rootValue = preorder[0]; 

    let root = new TreeNode(rootValue); 

    // Find root in inorder
    let rootIndex = inorder.indexOf(rootValue); 

    // Left Subtree 
    let leftSubtree = inorder.slice(0, rootIndex); 

    // Right Subtree
    let rightSubtree = inorder.slice(rootIndex + 1); 

    // build left and right subtree
    root.left = buildTree(preorder.slice(1, rootIndex + 1), leftSubtree); 

    root.right = buildTree(preorder.slice(rootIndex + 1), rightSubtree); 

    return root; 
};