let arr = [2, 4, 9, 7, 8, 50, 54, 3]
//sort the array element

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) { // for descending if ascending means (>)
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
}
console.log(arr, 'array values')

//by using sor function.
arr.sort((a, b) => b - a) // b-a for descending order.
console.log(arr, 'after sorting resulet')

const nums = [2, 4, 1, 3, 2, 4, 5];

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
} console.log(nums, 'ascending order of array element')

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] < nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
}
console.log(nums, 'descending order')

let duplicates = []
let newValue = []
for (let e of nums) {
    duplicates.has(e) ?

        duplicates.push(e) : newValue.push(e)

}
console.log(newValue, 'without duplicates')