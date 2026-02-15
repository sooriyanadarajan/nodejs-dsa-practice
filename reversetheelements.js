const arrayvalues = [1, 21, 3, 5, 6, 7, 8, 8, 9]
let reverseValue = []
for (let i = arrayvalues.length - 1; i >= 0; i--) {
    reverseValue.push(arrayvalues[i])
}

console.log(reverseValue, 'reversevalue log')

// time - O(n) ,space O(n)- new array created ,  no memory efficient

function reverseArray(arrayvalues) {
    let left = 0;
    let right = arrayvalues.length - 1;
    while (left < right) {
        let temp = arrayvalues[left];
        arrayvalues[left] = arrayvalues[right];
        arrayvalues[right] = temp;
        left++;
        right--;

    }
    return arrayvalues
}
console.log('reverse based on performance', reverseArray(arrayvalues))

// time - O(n) space O(1), no extra memory, production ready