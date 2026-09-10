/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if(strs.length === 0) return ""; 

   // reference string (pehle element ko base maante hai)
   const base = strs[0]; 

   for(let i = 0; i < base.length; i++) {
        const char = base[i]; 

        // sabhi remaining strings ke index 'i' ko check karo 
        for(let j = 1; j < strs.length; j++) {
            // Agar index length se bahar ho ya character match na kare 
            if(i === strs[j].length || strs[j][i] !== char) {
                return base.slice(0, i)
            }
        }
   }

   return base; 
};