/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // edge cases handle karne ke liye dummy node banate hain (jaise head node ko hi delete karna ho)
    let dummy = new ListNode(0); 
    dummy.next = head; 

    let fast = dummy;
    let slow = dummy; 

    // 1. Fast pointer ko 'n + 1' steps aage badhao 
    for(let i = 0; i <= n; i++) {
        fast = fast.next; 
    }   

    // 2. Fast aur slow dono ko tab tak aage badhao jab tak fast end tak na pahuch jaaye
    while(fast !== null) {
        fast = fast.next; 
        slow = slow.next; 
    }

    // 3. Slow ab target node ke theek pehle waale node par hai, toh nnext pointer skip kardo 
    slow.next = slow.next.next; 
    
    // updated head return karo
    return dummy.next; 
}   ;