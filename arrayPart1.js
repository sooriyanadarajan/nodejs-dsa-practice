// Try creating a program that:
// 1. Creates an array of 5 student scores
// 2. Calculates and prints the average score
// 3. Finds and prints the highest and lowest scores

const scores = [100, 98, 87, 43, 67]
let sumofValues = 0
let average
for (sc of scores) {
    sumofValues += sc
}

average = sumofValues / scores.length
console.log(average, 'average value')

let maximum = 0
for (hg of scores) {
    if (maximum < hg) {
        maximum = hg
    }
}
console.log(maximum, 'maximum marks')

let lowest = scores[0]
for (lw of scores) {
    if (lowest > lw) {
        lowest = lw
    }
}
console.log(lowest, 'lowest')