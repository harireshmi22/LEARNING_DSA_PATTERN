/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let n = matrix.length;

    for (let i = 0; i < n; i++) {

        let rowSeen = new Array(n + 1).fill(false);
        let colSeen = new Array(n + 1).fill(false);

        for (let j = 0; j < n; j++) {
            let rowVal = matrix[i][j];
            let colVal = matrix[j][i];

            if (rowSeen[rowVal]) return false;
            rowSeen[rowVal] = true;

            if (colSeen[colVal]) return false;
            colSeen[colVal] = true;

        }
    }

    return true;
};