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


//finding the max
function toFindSecondMaximum(arr) {
    let firstMax = 0;
    let secondMax = 0;
    for (let value of arr) {
        if (value > firstMax) {
            secondMax = firstMax
            firstMax = value
        } else if (value > secondMax && value !== firstMax) {
            secondMax = value
        }
    }
    console.log(secondMax, 'second max elem')
    return secondMax

}
toFindSecondMaximum(arr)
const k = 4
function kthLargest(arr, k) {
    arr.sort((a, b) => b - a);
    return arr[k - 1];
}
console.log('4 th max', kthLargest(arr, k))