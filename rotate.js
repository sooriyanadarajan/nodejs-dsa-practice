const arr = [1, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < arr.length; i--) {
    console.log(arr[i], 'i')
    arr.push(i)
}
console.log(arr, 'after reverse the element')