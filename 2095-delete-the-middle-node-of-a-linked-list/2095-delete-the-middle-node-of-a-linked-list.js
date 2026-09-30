/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head) return; 

    let dummy = new ListNode(0);

    dummy.next = head; 

    let slow = dummy; 
    let fast = head; 

    while(fast !== null && fast.next !== null) {
        fast = fast.next.next; // move 2 steps ahead 
        slow = slow.next;  // move 1 steps ahead
    } 

    // slow is right before the middle node, skip the middle node
    slow.next = slow.next.next; 

    return dummy.next; 
};