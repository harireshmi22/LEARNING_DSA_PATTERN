/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); 
    let curr = dummyHead; 
    let carry = 0; 

    while(l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 !== null ? l1.val : 0; 
        let val2 = l2 !== null ? l2.val : 0; 

        // Calculate sum and update every 
        let sum = val1 + val2 + carry; 
        carry = Math.floor(sum / 10); 

        // Append new digit node 
        curr.next = new ListNode(sum % 10); 
        curr = curr.next; 

        // Advance linked list pointers
        if(l1 !== null) l1 = l1.next; 
        if(l2 !== null) l2 = l2.next; 
    }

    return dummyHead.next; 
};