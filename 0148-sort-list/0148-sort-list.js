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
var sortList = function(head) {

    // base case 
    if(head === null || head.next === null) return head; 

    // find middle 
    let slow = head; 
    let fast = head; 
    let prev = null; 

    while(fast !== null && fast.next !== null) {
        prev = slow; 
        slow = slow.next; 
        fast = fast.next.next; 
    }

    // Split the list 
    prev.next = null; 

    // sort left and right 
    const left = sortList(head); 
    const right = sortList(slow); 

    // Merge sorted list
    return merge(left, right); 
};

function merge(left, right) {
    const dummy = new ListNode(0); 
    let curr = dummy; 

    while(left !== null && right !== null) {
        if(left.val <= right.val) {
            curr.next = left; 
            left = left.next; 
        } else {
            curr.next = right; 
            right = right.next; 
        }

        curr = curr.next; 
    }

    // Remaining nodes 
    if(left !== null) curr.next = left; 

    if(right !== null) curr.next = right; 

    return dummy.next; 
}