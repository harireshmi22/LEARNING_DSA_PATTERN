/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length === 0) return null; 

    // jab tak sirf 1 list na bache, merge karte raho 
    while(lists.length > 1) {
        let mergedLists = []; 
        
        // pairs me 2 lists ek saath merge karo 
        for(let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i]; 
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null; 
            mergedLists.push(mergeTwoLists(l1, l2)); 
        }

        lists = mergedLists; 
    }

    return lists[0]; 
};

// Helper function: 2 sorted lists ko merge karne ke liye 
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0); 
    let current = dummy; 

    while(l1 && l2) {
        if(l1.val < l2.val) {
            current.next = l1; 
            l1 = l1.next; 
        } else {
            current.next = l2; 
            l2 = l2.next; 
        }

        current = current.next; 
    }

    current.next = l1 || l2; 
    return dummy.next; 
}