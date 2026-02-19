/* 
Given array + k → return max sum of any subarray of size k

Example:

arr = [2, 1, 5, 1, 3, 2], k = 3
Output = 9(5 + 1 + 3)
*/

// const arr = [-2, -1, -5, -1, -3]
// const k = 2

const k = 3
const arr = [2, 1, 5, 1, 3, 2]

let maximum = arr[0] + arr[1] + arr[2]
let majormaximum = maximum
let startingIndex = 0
let elements;

for (let i = 3; i < arr.length; i++) {
    maximum = maximum - arr[i - k] + arr[i]
    if (maximum > majormaximum) { // if minimum means need to change the symbol
        majormaximum = maximum
        startingIndex = i - k + 1
    }
    elements = arr.slice(startingIndex, startingIndex + k)
}
console.log(majormaximum, elements)