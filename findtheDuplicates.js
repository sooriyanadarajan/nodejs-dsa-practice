//find the duplicates
const arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9, 9]

const seen = {}
const dupValues = []
for (let a of arr) {
    if (seen[a]) dupValues.push(a)
    seen[a] = true
}
console.log(dupValues, 'duplicate values')


