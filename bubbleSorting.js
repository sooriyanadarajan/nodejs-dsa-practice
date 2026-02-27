const number = [5, 1, 3, 6]
let n = number.length - 1
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
        if (number[j] < number[j + 1]) {
            let temp = number[j]
            number[j] = number[j + 1]
            number[j + 1] = temp
        }
    }
}

console.log(number, 'number value')