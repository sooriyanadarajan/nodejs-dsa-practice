const arr = [10, 20, 30, 40];
let first = -Infinity, second = -Infinity;

for (let n of arr) {
    if (n > first) {
        second = first;
        first = n;
    } else if (n > second && n !== first) {
        second = n;
    }
}

console.log(second);
