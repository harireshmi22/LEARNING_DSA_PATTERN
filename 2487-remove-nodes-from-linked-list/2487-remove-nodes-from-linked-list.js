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
var removeNodes = function(head) {
    let stack = []; 
    let curr = head; 

    while(curr) {
        // jab tak stack ka top chhota hai curr se, use nikal do 
        while(stack.length > 0 && stack[stack.length - 1].val < curr.val) {
            stack.pop(); 
        }

        stack.push(curr); 
        curr = curr.next; 
    }

    // ab stack me sirf answer waale nodes bache hai 
    // unko wapas link karo 
    for(let i = 0; i < stack.length - 1; i++) {
        stack[i].next = stack[i + 1]; 
    }

    stack[stack.length - 1].next = null;

    return stack[0]; 
};