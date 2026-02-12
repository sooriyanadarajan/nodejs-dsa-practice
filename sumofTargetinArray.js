const nums = [1, 2, 3, 4, 5, 6, 7, 8]
const target = 6
const results = []
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
            if (nums[i] + nums[j] + nums[k] == target) {
                results.push([nums[i], nums[j], nums[k]])
                console.log('elements', nums[i], nums[j])
            }
        }
    }
}
console.log(results, 'resulet vlaue')