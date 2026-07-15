/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    // aproach hai monotonic queue waala 
    let dequeue = []; 
    let result = []; 

    // array ka traversal karo
    for(let i = 0; i < nums.length; i++) {

        // agar index out of window ho jaaye toh remove kardo 
        if(dequeue.length > 0 && dequeue[0] < i - k + 1) dequeue.shift(); 

        // jab tak element num[i] hai toh remove karke daaldo 
        while(dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) dequeue.pop(); 

        dequeue.push(i)
        
        // agar window size k tak pahuch jaaye toh front element result me daalo
        if(i >= k - 1) result.push(nums[dequeue[0]]); 
    }

    return result; 
};