
const value = [1, 4, 5, 6, 7, 2, 1]

function BubbleSorting(value) {
    for (let i = 0; i < value.length - 1; i++) {
        for (let j = 0; j < value.length - 1 - i; j++) {
            if (value[j] > value[j + 1]) {

                let temp = value[j]
                value[j] = value[j + 1]
                value[j + 1] = temp
            }
        }
    }
    return value
}
console.log('Bubble sorting log', BubbleSorting(value))


function InsertionSorting(value) {
    for (let i = 1; i < value.length; i++) {
        let j = i - 1
        let key = value[i]
        while (value[j] > 0 && value[j] > key) {
            value[j + 1] = value[j]
            j--
        }
        value[j + 1] = key
    }
    return value
}
console.log('Inserting Sorting log', InsertionSorting(value))


const a = [1, 4, 7, 8, 9, 15]
const b = [2, 3, 5, 10, 12]
function MergeSorting(a, b) {
    let result = []
    let i = 0; let j = 0
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i])
            i++
        } else {
            result.push(b[j])
            j++
        }

    }
    while (i < a.length) {
        result.push(a[i])
        i++
    }

    while (j < b.length) {
        result.push(b[j])
        j++
    }
    return result
}
console.log('Merge Sorting', MergeSorting(a, b))