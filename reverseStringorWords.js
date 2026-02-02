function reverseString(arr) {
    let reversevalue = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        reversevalue += arr[i]
    }
    console.log(reversevalue)

}

reverseString("hello world")