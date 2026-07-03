/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    // agar numRows me koi value nhi hai toh return karo khaali array[]
    if (numRows === 0) return []

    // triangle array banaya hai jisme value add honge
    const triangle = []

    // pehele 1 push karna hoga kyuki yeh pascal triangle hai 
    triangle.push([1]);

    // outer loop for trianle jisme bahar ki index dega 
    for (let i = 1; i < numRows; i++) {
        /* previous row chahiye 
        and current row banane ke liye 
        means triangle ko previous row me store karunga */

        // previous index ke liye [1 - 1] = 0 
        const prevRow = triangle[i - 1];
        // triangle[2 - 1] = 1 // triangle ka index 

        // ab mjhe current row banane ke liye 1 push karna hoga 
        // then phir previous row ke value add karne ke baad 
        // phir 1 push karna hoga 
        const currRow = []; 
        currRow.push(1); 

        // inner loop for ek index me woh elements ko 
        // check karega and usko sum karega prevRows ko lekar 
        for(let j = 1; j < i; j++) {
            const sum = prevRow[j - 1] + prevRow[j]; 
            currRow.push(sum)
        }

        // phir last me 1 push kardo 
        // 1 first me and bich ke liye sum kiya then last me 1 push kiya 
        currRow.push(1); 

        // then currRow ko triangle me push karo 
        triangle.push(currRow)

    }

    return triangle; 
};