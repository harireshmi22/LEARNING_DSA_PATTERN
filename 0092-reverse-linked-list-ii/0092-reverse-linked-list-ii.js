/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head || left === right) return head; 

    let dummy = new ListNode(0); 
    dummy.next = head; 
    let prev = dummy; 

    // 1. Reversal part ke pehele waale node tak pahucho 
    for(let i = 1; i < left; i++) {
        prev = prev.next; 
    }

    // `curr` ab sublist ka pehle node hai 
    let curr = prev.next; 

    // standdard linkedlist reversal algorithm (left se right tak)
    let sublistPrev = null; 
    let nextNode = null; 

    // Loop `right - left + 1` baar chalega (sublist ki length)
    for(let i = 0; i <= right - left; i++) {
        nextNode = curr.next;    
        curr.next = sublistPrev; 
        sublistPrev = curr; 
        curr = nextNode; 
    }
    // 2. Re-connection Steps: 

    // (a) Sublist ki nayi tail (jo pehle prev.next thi) ko remaining list (curr) se jodo 
    prev.next.next = curr; 

    // (b) List ke Left part (prev) ko reversed sublists ke head (sublistPrev) se jodo 
    prev.next = sublistPrev; 

    return dummy.next; 
};