const array = [1, 2, 4, 9, 8, 7]
const target = 10
let found = false
function tofindtheElement(array) {
    for (let a of array) {
        if (a == target) {
            found = true
        }
    }
    return found
}
console.log(tofindtheElement(array))

const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const targets = 8
let index = arrays.length / 2
console.log(index, 'index points')
function binarySearch(arrays) {
    if (arrays[index] == targets) {

    }

    return arrays
}