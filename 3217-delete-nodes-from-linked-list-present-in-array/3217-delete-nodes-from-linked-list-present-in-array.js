/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const set = new Set(nums) // direct aise bana sakte ho 

    let dummy = new ListNode(0); 
    dummy.next = head; 

    let prev = dummy; 
    let curr = head; 

    while(curr) {
        if(set.has(curr.val)) prev.next = curr.next; 
        else prev = curr; 

        curr = curr.next; 
    }
    
    return dummy.next; 
};