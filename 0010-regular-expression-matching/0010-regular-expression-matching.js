/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    const m = s.length; 
    const n = p.length; 

    // (m + 1) * (n + 1) table initialize karein false se
    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(false)); 

    // Base case: empty String matches empty pattern 
    dp[0][0] = true; 

    // Pattern empty string ko match kare jab '*' ho (e.g. "a*", "a*b*")
    for(let j = 2; j <= n; j++) {
        if(p[j - 1] === "*") dp[0][j] = dp[0][j - 2]; 
    }

    // Dp table fill karna 
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            const charPattern = p[j - 1]; 
            const charString = s[i - 1]; 

            if(charPattern === "*") {
                // Option 1: 0 occurences of preceding character 
                dp[i][j] = dp[i][j - 2];

                // Option 2: 1 or more occurences 
                const prevPatternChar = p[j - 2]; 

                if(prevPatternChar === "." || prevPatternChar === charString) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]; 
                }
            } else if (charPattern === "." || charPattern === charString) {
                // Characters match ya pattern '.' hai
                dp[i][j] = dp[i - 1][j - 1]; 
            }
        }
    }

    return dp[m][n]; 
};