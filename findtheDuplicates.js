//find the duplicates
const arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9, 9]

const seen = {}
const dupValues = []
for (let a of arr) {
    if (seen[a]) dupValues.push(a)
    seen[a] = true
}
console.log(dupValues, 'duplicate values')

//if in case need to find the frequency of array elements means

const frequency = {}
for (let as of arr) {
    frequency[as] = (frequency[as] || 0) + 1
}
console.log('duplicates frequency value', frequency)

// if in case of only duplicates frequency means

const dupfrequency = {}
const dupSeen = {}
const duplicatesValue = []
for (let da of arr) {
    if (dupSeen[da]) {
        dupfrequency[da] = (dupfrequency[da] || 1) + 1
    } else {
        dupSeen[da] = 1
    }

}
console.log(dupfrequency, 'dupfrequency')