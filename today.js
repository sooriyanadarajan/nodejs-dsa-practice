// Input:
// arr = [2, 1, 5, 1, 3, 2]
// k = 3

// Output:
// 9

// Explanation:
// // Subarrays of size 3:
// [2, 1, 5] = 8
// [1, 5, 1] = 7
// [5, 1, 3] = 9   //← maximum
// [1, 3, 2] = 6


const arr = [2, 1, 5, 1, 3, 2]
const k = 3
let tempMaximum = arr[0] + arr[1] + arr[2]
let maximum = tempMaximum
let startingIndex = 0
let elements = {}

for (let i = 3; i < arr.length; i++) {
    tempMaximum = tempMaximum - arr[i - k] + arr[i]
    if (tempMaximum > maximum) {
        maximum = tempMaximum
        startingIndex = i - k + 1

    }
    elements = arr.slice(startingIndex, startingIndex + k)
}

console.log(maximum, elements, 'maximum sum of k value')