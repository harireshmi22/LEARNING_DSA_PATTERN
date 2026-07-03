/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const triangle = []; 
    triangle.push([1]); 
    let count = 0; 

    for(let i = 1; i < rowIndex + 1; i++) {
        const prevRow = triangle[i - 1]; 
        const currRow = []; 
        currRow.push(1); 

        for(let j = 1; j < i; j++) {
            const sum = prevRow[j - 1] + prevRow[j]; 
            currRow.push(sum)
        }

        currRow.push(1); 
        triangle.push(currRow); 
        count++
    }

    return triangle[count]; 
};

// function getRowIndex(rowIndex) {
//     const fullTriangle = getRow(rowIndex + 1); 
//     return fullTriangle[rowIndex]; 
// }