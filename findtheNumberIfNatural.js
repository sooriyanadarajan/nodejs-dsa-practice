//Array contains numbers from 1 to N, one number is missing. Find it.
// The sum formula works only when exactly one number is missing and all values are in the 1 to N range.

function findMissing(arr, n) {
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}

const arr = [1, 2, 4, 5]
const n = 5
findMissing(arr, n)
console.log(findMissing(arr, n))

//O(n) time, O(1) space.
// exp: "I calculate the expected sum of numbers from 1 to N using the formula N*(N+1)/2, then subtract the actual array sum. The difference is the missing number. This gives O(n) time and O(1) space."