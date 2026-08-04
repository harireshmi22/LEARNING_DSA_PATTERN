/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []; // combination banega uske save karne ke liye 

    // yeh ek function hai jo combination banakar dega
    function backTracking(index, currentPath) {

        if(currentPath.length === k) {
            result.push([...currentPath]); 
            return; 
        }

        for(let i = index; i <= n - (k - currentPath.length) + 1; i++) {
            currentPath.push(i); 
            backTracking(i + 1, currentPath); 
            currentPath.pop(); 
        }
    }

    backTracking(1, []); 
    return result; 
};