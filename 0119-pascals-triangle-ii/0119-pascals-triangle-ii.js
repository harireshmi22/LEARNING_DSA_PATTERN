/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    // indexes se triangle create karke bana rhe hai 
    let row = [1]

    for(let i = 1; i <= rowIndex; i++){
        row.push(1)

        for(j = i - 1; j > 0; j--) {
            row[j] = row[j - 1] + row[j]
        }
    }

    return row; 
};

// var getRow = function(rowIndex) {
//     const triangle = [];
//     triangle.push([1]);

//     for(let i = 1; i <= rowIndex; i++) { // <= use karo, clean lagta hai
//         const prevRow = triangle[i - 1];
//         const currRow = [];
//         currRow.push(1);

//         for(let j = 1; j < i; j++) {
//             currRow.push(prevRow[j - 1] + prevRow[j]);
//         }

//         currRow.push(1);
//         triangle.push(currRow);
//     }

//     return triangle[rowIndex]; // count hata diya
// };