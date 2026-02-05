const arr = [7, 1, 2, 5, 67, 89, 0, 23, 98]
let maximum = 0
//to find the maximum . 
for (let value of arr) {
    if (value > maximum) {
        maximum = value
    }
}
console.log(maximum, 'maximum vlaue')


// to find the minimum
let minimum = arr[0]
for (let min of arr) {
    if (min < minimum) {
        minimum = min
    }
}
console.log(minimum, 'minimum value')