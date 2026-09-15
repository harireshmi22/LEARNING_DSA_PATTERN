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
var deleteDuplicates = function(head) {
    let curr = head; 

    // Traverse the list 
    while(curr && curr.next) {
        // check if next value is the same as curr 
        if(curr.val === curr.next.val) {
            let nextNext = curr.next.next; 
            curr.next = nextNext; 
        } else {
            curr = curr.next; 
        }
    }

    return head; 
};