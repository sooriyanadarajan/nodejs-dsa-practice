// Input: s = "abcabcbb"
// Output: 3

// Explanation:
// The answer is "abc", with length 3.
const s = "abcabcdbb"

let left = 0;
let max = 0
let characters;
let start = 0
let map = new Map()

for (let right = 0; right < s.length; right++) {

    if (map.has(s[right]) && map.get(s[right]) >= 0) {
        left = map.get(s[right]) + 1
    }
    map.set(s[right], right)
    if (right - left + 1 > max) {
        max = right - left + 1
        start = left

    }
    characters = s.slice(start, start + max)

}
console.log(max, characters, 'max lenght')