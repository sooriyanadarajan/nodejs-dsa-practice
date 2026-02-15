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