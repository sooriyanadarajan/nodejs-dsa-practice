// Hashing is Storing data in the way that canyou fetch instantly O(1)

// Types of Hashing :
// 1. Object
// 2. Map (set,get and has method)
// 3. Set (only for unique values) ( add and has method)

// 1. Object : 
let map = {}
map[1] = 10
map[2] = 13

// 2. Map:

let maps = new Map()
maps.set(1, 10)
console.log(maps, 'maps log')
console.log(maps.get(1))
console.log(maps.has(1))

// 3. Set :

let values = new Set()
values.add(1)
values.add(2)
console.log(values)
console.log(values.has(10))

// When to Use:
/*
Finding Duplicates
Finding Frequency
Finding sum of two elements
Finding the Presence
*/


// Brute force not recommended because O(n²)
const nums = [2, 7, 4, 11, 15, 5]
const target = 9
let posiblity = []
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (target == nums[i] + nums[j]) {
            posiblity.push([nums[i], nums[j]])
        }
    }
}

console.log(posiblity, 'question 1')

// using hashing need to find the sum of possibility elements to sum of 9 
// if incase need all the posibility of elements means (define one variable and push into it)
function toSumofElement(nums, target) {
    let map = new Map()
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (map.has(diff)) {
            result.push([nums[map.get(diff)], nums[i]])
        }
        map.set(nums[i], i)
    }
    return result
}
console.log(toSumofElement(nums, target))

// to ensure the duplicates,

const input = [1, 2, 3, 1]

function toFindDuplicates(input) {
    let set = new Set()

    for (let a of input) {
        if (set.has(a)) return true
        set.add(a)

    }
}

console.log(toFindDuplicates(input))

// count the frequency "leetcode" FIRST UNIQUE CHARACTER

const value = "leetcode"
function tofindUnique(value) {
    let map = {}
    let result = []
    for (let a of value) {
        map[a] = (map[a] || 0) + 1
    }

    for (let a of value) {
        if (map[a] > 1) {
            result.push(a)
        }
    }
    return result

}

console.log(tofindUnique(value), 'unique value')

// sliding window with finding longest subarray,

const val = "abcabcdbb"
function tofindMaxsubstringEle(val) {
    let substring = ''
    let map = new Map()
    for (let i = 0; i < val.length; i++) {
        if (map.has(val[i])) {
            return substring
        }
        map.set(val[i], i)
        substring += val[i]
    }
}
console.log(tofindMaxsubstringEle(val))

function ToFindDup(input) {
    let sets = new Set()
    for (let as of input) {
        if (sets.has(as)) {
            return true
        }
        sets.add(as)
    }
}

console.log(ToFindDup([1, 2, 3, 1]), 'meta quest')



function tofindtheDuplicateElemt(inputs) {
    let map = {}
    for (let asm of inputs) {
        map[asm] += (map[asm] + 0) || 1
    }
    for (let asm of inputs) {
        if (map[asm] > 0) {
            console.log(asm, '!!!!!!!')
            return asm
        }
    }
}

console.log('meta quest', tofindtheDuplicateElemt(["a", "b", "c", "a", "d", "b"]))