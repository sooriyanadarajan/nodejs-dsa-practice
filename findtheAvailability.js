const arr = [1, 2, 3, 4, 5, 8, 6, 9]
const key = 8
for (let a of arr) {
    if (key == a) {
        console.log('value is availeble')
    }
    else {
        console.log('provided key is not availbel in the array')
    }
}

// output:
/*
provided key is not availbel in the array
provided key is not availbel in the array
provided key is not availbel in the array
provided key is not availbel in the array
provided key is not availbel in the array
provided key is not availbel in the array
provided key is not availbel in the array
*/    // because which is inside the loop


let available = false;
for (let value of arr) {
    console.log(value, 'value data for checking')
    if (value == key) {
        console.log(value, 'value print')
        available = true;
        break;
    }
}

console.log('key value matched in the array', available)