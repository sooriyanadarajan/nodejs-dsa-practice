const array = [1, 2, 3, 4, 5, 6, 7, 9, 10, 15]
let even = []
let odd = []
let find;
for (a of array) {
    find = a % 2
    find == 0 ? even.push(a) : odd.push(a)
}
console.log(even, 'even numbers')
console.log(odd, 'odd numbers')