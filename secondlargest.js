const arr = [10, 20, 30, 40];
let first = -Infinity, second = -Infinity;

for (let n of arr) {
    if (n > first) {
        second = first;
        first = n;
    } else if (n > second && n !== first) {
        second = n;
    }
}

console.log(second);



const arrs = [10, 20, 30, 40];
let firsts = -Infinity, seconds = -Infinity;

for (let ab of arrs) {
    if (ab > firsts) {
        seconds = firsts
        firsts = ab
    } else if (ab > seconds && ab !== firsts) {
        seconds = ab
    }
}

console.log(seconds, 'second log')

// find the sum of 10 in the array elements

const value = [2, 3, 4, 5, 6, 7]
function toFindtheSumofgivenK(value) {
    const k = 10
    let elements = []
    for (let i = 0; i < value.length; i++) {
        for (let j = i + 1; j < value.length; j++) {
            if (value[i] + value[j] == k) {
                elements.push([value[i], value[j]])
            }
        }
    }
    return elements
}

console.log(toFindtheSumofgivenK(value))

const arrayInput = "abcabcbb"
function tofindtheMaxElements(arrayInput) {
    let map = new Map()
    if (map.has())
        return arrayInput
}

console.log(tofindtheMaxElements(arrayInput))