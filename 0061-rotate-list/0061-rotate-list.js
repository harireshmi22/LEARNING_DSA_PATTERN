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
var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head; 

    // Step 1: Length calculate karo aur last node tak pahuchein
    let length = 1; 
    let tail = head; 
    while(tail.next !== null) {
        tail = tail.next; 
        length++; 
    }

    // Step 2: Redundant rotations remove karo 
    k = k % length; 
    if(k === 0) return head; 

    // Step 3: Circle bana do 
    tail.next = head; 

    // Step 4: Naya tail dhoondo (length - k steps from old tail) 
    let stepsToNewTail = length - k; 
    let newTail = tail
    while(stepsToNewTail > 0) {
        newTail = newTail.next; 
        stepsToNewTail--; 
    }

    // Step 5: Circle break karo aur naya head set karo 
    const newHead = newTail.next; 
    newTail.next = null; 

    return newHead; 
};