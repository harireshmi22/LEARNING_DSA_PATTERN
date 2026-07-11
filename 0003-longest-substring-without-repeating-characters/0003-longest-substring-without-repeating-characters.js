/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0; 
  let maxLength = 0; 

  for(let right = 0; right < s.length; right++) {
    // check if s[right] already exist in the window 
    while(isDuplicate(s, left, right)) {
        left++; 
    } 

    maxLength = Math.max(maxLength, right - left + 1); 
  }  

  return maxLength; 
};


function isDuplicate(s, left, right) {
    for(let i = left; i < right; i++) {
        if(s[i] === s[right]){
            return true; 
        }
    }

    return false; 
}