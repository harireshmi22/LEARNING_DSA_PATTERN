/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    // two pointers use karenge 
    // because point yeh ek sorted array hai 
    // aur extra space lena nhi padega 

    // like hashmap v use kar sakte the lekin 
    // usme space use ho rha hai and aur question space use nhi karna hai 
    let i = 0;
    let j = numbers.length - 1; 

    // jab tak i less hoga j se tabtak 
    // find karo agar j, i ko cross kardeta hai toh terminate karo
    while (i < j) {

        let sum = numbers[i] + numbers[j];

        if (sum === target) return [i + 1, j + 1];

        if (sum < target) i++
        else j--
    }

    return -1;
};