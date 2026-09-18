/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    
    function generate(start, end) {
        
        // No numbers available 
        if(start > end) return [null]; 

        const trees = []; 

        // Try every number as root
        for(let rootValue = start; rootValue <= end; rootValue++) {

            // Generate all possible left subtrees
            const leftTrees = generate(start, rootValue - 1); 

            // Generate all possible right subtrees 
            const rightTrees = generate(rootValue + 1, end); 

            // Combine every left subtree
            // with every right subtree
            for(const leftTree of leftTrees) {
                for(const rightTree of rightTrees) {

                    const root = new TreeNode(rootValue); 

                    root.left = leftTree; 
                    root.right = rightTree; 

                    trees.push(root); 
                }
            }       
        }

        return trees; 
    }

    return generate(1, n)
};