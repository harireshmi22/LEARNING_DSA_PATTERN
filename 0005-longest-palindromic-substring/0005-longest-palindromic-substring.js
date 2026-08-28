/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;

    let longest = "";

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let oddPal = expandAroundCenter(i, i);
        let evenPal = expandAroundCenter(i, i + 1);

        if (oddPal.length > longest.length) longest = oddPal;
        if (evenPal.length > longest.length) longest = evenPal;
    }

    return longest;
};