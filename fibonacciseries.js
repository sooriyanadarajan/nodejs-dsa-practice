function fib(n) {
    var a = 0, b = 1;
    for (var i = 2; i <= n; i++) {
        console.log(a, b, i, 'sum of elemnts')
        var temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fib(7));
