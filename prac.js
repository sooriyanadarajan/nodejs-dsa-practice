const a = [1, 3, 5, 7, 9, 80]
const b = [2, 4, 6, 8, 45]
for (let elem of b) {
    a.push(elem)

}
for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {

        if (a[j] > a[j + 1]) {
            let temp = a[j]
            a[j] = a[j + 1]
            a[j + 1] = temp
        }
    }
}

console.log(a, 'bubble sorting')