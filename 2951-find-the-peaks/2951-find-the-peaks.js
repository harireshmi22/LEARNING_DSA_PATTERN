/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let peaks = []; 

    // loop index 1 se start hoga aur second-last element tak jaayega 
    // kyuki first (0) aur last (length - 1) peak nhi ho skata hai 
    for(let i = 1; i < mountain.length - 1; i++) {

        // check agar current element apne left aur right dono se strictly bada hai 
        if(mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
            peaks.push(i)
        }
    }

    return peaks; 
};