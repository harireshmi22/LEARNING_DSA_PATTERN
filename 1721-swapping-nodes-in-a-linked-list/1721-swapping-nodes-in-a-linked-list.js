/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let dummy = new ListNode(0); 
    let x = head; 
    let y = head; 
    let t = head; 

    // Until we reach k-th node from the beginning 
    while(k > 1) {
        x = x.next; 
        t = t.next; 
        k--; 
    }

    // Until pointer t reach last need
    while(t.next) {
        y = y.next; 
        t = t.next; 
    }

    // Swap values at both the nodes
    let temp = x.val; 
    x.val = y.val; 
    y.val = temp; 

    return head; 

};