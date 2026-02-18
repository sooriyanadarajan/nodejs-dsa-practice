/* Select the maximum number of non-overlapping activities that can be performed by a single person.
You can perform only one activity at a time.
Return the maximum number of activities you can complete.
*/
// Input :

/*
start = [1, 3, 0, 5, 8, 5]
end = [2, 4, 6, 7, 9, 9]
*/

//Output: 4

let starts = [1, 3, 0, 5, 8, 5]
let ends = [2, 4, 6, 7, 9, 9]

let activity = []
for (let i = 0; i < starts.length; i++) {
    activity.push([starts[i], ends[i]])
}
let first = activity[0][0]
let second = activity[0][1]
let possiblityElements = [[activity[0][0], activity[0][1]]]

for (let i = 1; i < starts.length; i++) {
    if (activity[i][0] >= second) {
        first++
        second = activity[i][1]
        possiblityElements.push([activity[i][0], activity[i][1]])

    }
}

console.log(activity, 'my logic')
console.log(possiblityElements, 'posiblity elem')
console.log(first, 'my logic')