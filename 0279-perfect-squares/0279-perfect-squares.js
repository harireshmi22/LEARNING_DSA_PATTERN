/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {

    let q = [n];
    let visited = new Uint8Array(n + 1);
    visited[n] = 1;
    let level = 0;

    while (q.length > 0) {
        let size = q.length;
        level++;

        for (let i = 0; i < size; i++) {
            const current = q.shift();

            for (let j = 1; j * j <= current; j++) {
                const remainder = current - j * j;
                if (remainder === 0) return level;

                if (!visited[remainder]) {
                    visited[remainder] = 1;
                    q.push(remainder);
                }
            }
        }
    }

    return level
};