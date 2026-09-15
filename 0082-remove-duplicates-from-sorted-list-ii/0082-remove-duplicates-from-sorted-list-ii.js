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
    
    const dummy = new ListNode(0); 
    dummy.next = head; 

    let prev = dummy; 
    let curr = head; 

    while(curr) {
        // duplicate mila 

        if(curr.next && curr.val === curr.next.val) {

            // duplicate group ke end tak jao 
            while(curr.next && curr.val === curr.next.val) {
                curr = curr.next; 
            }

            // Poore group ko skip karo 
            prev.next = curr.next; 
        } else {
            
            // current node update hai
            prev = prev.next; 
        }

        curr = curr.next; 
    }

    return dummy.next; 
};