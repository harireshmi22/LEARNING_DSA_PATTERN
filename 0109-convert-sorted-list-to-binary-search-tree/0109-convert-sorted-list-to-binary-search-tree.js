/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {

    // Empty list 
    if(head === null) return null; 

    // only one node 
    if(head.next === null) return new TreeNode(head.val); 

    // find middle
    let prev = null 
    let slow = head; 
    let fast = head; 

    while(fast !== null && fast.next !== null) {
        prev = slow; 
        slow = slow.next; 
        fast = fast.next.next; 
    }

    // Break the list into two halves 
    prev.next = null; 

    // slow is the middle one 
    let root = new TreeNode(slow.val); 

    // left half 
    root.left = sortedListToBST(head); 

    // Right half 
    root.right = sortedListToBST(slow.next); 

    return root; 
};