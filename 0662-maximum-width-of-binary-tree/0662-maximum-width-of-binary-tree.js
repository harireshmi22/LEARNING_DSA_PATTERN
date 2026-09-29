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
var widthOfBinaryTree = function(root) {
    if(!root) return 0; 

    let maxWidth = 0n; 

    // queue store karega pairs: [node, index] 
    // bigInt (0n, 1n, 2n) use karte hai extra safety ke liye

    const queue = [[root, 0n]]; 

    while(queue.length > 0) {
        const levelSize = queue.length; 
        // pehele node ka index is level pe
        const minLevelIndex = queue[0][1];

        let first = 0n; 
        let last = 0n; 

        for(let i = 0; i < levelSize; i++) {
            const [node, currIndex] = queue.shift(); 

            // Normalize index to avoid huge numbers 
            const normalizedIndex = currIndex - minLevelIndex; 

            if(i === 0) first = normalizedIndex; 
            if(i === levelSize - 1) last = normalizedIndex; 

            if(node.left) queue.push([node.left, 2n * normalizedIndex + 1n]); 

            if(node.right) queue.push([node.right, 2n * normalizedIndex + 2n]); 

            const currentWidth = last - first + 1n; 
            if(currentWidth > maxWidth) maxWidth = currentWidth; 

        } 
    }

    return Number(maxWidth);   
};