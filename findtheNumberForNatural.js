function findMissing(arr, n) {
    const set = new Set(arr);
    const missing = [];

    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            missing.push(i);
        }
    }
    return missing;
}

const arr = [1, 3, 4, 5, 6, 9, 12]
const n = 8
findMissing(arr, n)
console.log(findMissing(arr, n))