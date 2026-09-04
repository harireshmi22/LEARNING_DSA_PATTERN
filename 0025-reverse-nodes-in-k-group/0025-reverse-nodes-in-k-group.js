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

 function getKthNode(curr, k) {
    while(curr && k > 0) {
        curr = curr.next; 
        k--; 
    } 

    return curr; 
 }

var reverseKGroup = function(head, k) {
    if(!head || k <= 1) return head; 

    const dummy = new ListNode(0); 
    dummy.next = head; 

    let prevGroupEnd = dummy; 

    while(true) {
        // Step 1: Check karo kya k nodes availabe hain
        const kthNode = getKthNode(prevGroupEnd, k); 
        if(!kthNode) break; // k se kam nodes hain, stop 

        const nextGroupStart = kthNode.next; 
        const groupStart = prevGroupEnd.next; 

        // Step 2: K nodes ko reverse karo 
        let prev = nextGroupStart; // directly connect tail to next group 
        let curr = groupStart; 

        while(curr !== nextGroupStart) {
            const nextTemp = curr.next; 
            curr.next = prev; 
            prev = curr; 
            curr = nextTemp; 
        }

        // Step 3: Previous group ko naya reversed head se connect karo 
        prevGroupEnd.next = kthNode; 

        // Step 4: Pointer ko agle group ke start ke liye shift karo 
        prevGroupEnd = groupStart; 
    }

    return dummy.next; 
};