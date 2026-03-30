// You are given a list of time slots.Merge overlapping intervals.

const interval = [
    { start: 1, end: 3 },
    { start: 2, end: 4 },
    { start: 6, end: 8 },
    { start: 7, end: 9 }
]
// { start: 1, end: 4 },
// { start: 6, end: 9 }

console.log('running the log')

function toMergeIntervals(interval) {

    interval.sort((a, b) => a.start - b.start)
    const output = [];
    let current = interval[0] // 1,3
    for (let i = 1; i < interval.length; i++) {
        let next = interval[i] // 2,4
        if (next.start < current.end) {
            current.end = Math.max(current.end, next.end)

        } else {
            output.push(current)
            current = next
        }
    }
    output.push(current)
    return output
}

console.log(toMergeIntervals(interval))