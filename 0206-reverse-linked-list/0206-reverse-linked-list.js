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
var reverseList = function(head) {
    let prev = null; 
    let curr = head; 

    while(curr !== null) {
        let nextTemp = curr.next; // 1. Agle node ko save karo 
        curr.next = prev; // 2. Pointer ko peeche (prev) ki taraf reverse karo 
        prev = curr; // 3. 'prev' ko ek step aage badhao 
        curr = nextTemp; // 4. 'curr' ko agle node par le jaao
    }

    return prev; // jab curr null hoga, tab prev new head hoga
};