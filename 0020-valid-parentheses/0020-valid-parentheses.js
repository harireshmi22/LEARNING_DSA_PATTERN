/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const stack = [];

    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let char of s) {
        if (!map[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            let top = stack.pop();
            if (top !== map[char]) {
                return false;
            }

        }
    }

    return stack.length === 0;
};