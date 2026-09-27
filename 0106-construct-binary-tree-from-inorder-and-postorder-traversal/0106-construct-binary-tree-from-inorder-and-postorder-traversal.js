/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    let map = new Map(); 

    for(let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i); 
    }  

    let postOrderIndex = postorder.length - 1; 

    function build(left, right) {

        if(left > right) return null; 

        let rootValue = postorder[postOrderIndex]; 
        postOrderIndex--; 

        let root = new TreeNode(rootValue); 
        
        let rootIndex = map.get(rootValue); 

        root.right = build(rootIndex + 1, right); 

        root.left = build(left, rootIndex - 1); 

        return root; 
    }

    return build(0, inorder.length - 1); 
};