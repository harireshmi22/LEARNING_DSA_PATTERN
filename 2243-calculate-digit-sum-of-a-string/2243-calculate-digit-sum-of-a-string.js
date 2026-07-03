/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */


/* Breaking it down
while (s.length > k): We only do a round if s is still too long.
for (let i = 0; i < s.length; i += k): This jumps k positions each loop. So with k=3, i will be 0, 3, 6, 9...
s.slice(i, i + k): Grabs the group. If you're near the end and there are only 2 chars left, slice just returns those 2. Handles the "last group can be smaller" rule for free.
Sum the digits: Loop through each character in group and parseInt(ch) to add them up.
temp += sum.toString(): 3 + 4 + 6 = 13, but we need to append "13" to the string, not add 13 numerically.
Trace with s = "11111222223", k = 3 */

var digitSum = function (s, k) {
    while (s.length > k) {
        // for temporary time
        let temp = ""

        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k) // takes last group even if < k

            // sum digits in this group 
            let sum = 0;
            for (let ch of group) {
                sum += parseInt(ch) // or sum += ch - '0'
            }

            temp += sum.toString()
        }

        s = temp; // replace s for next round
    }

    return s;
};