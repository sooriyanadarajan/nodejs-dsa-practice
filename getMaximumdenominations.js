/*To write a function that divides a number into the maximum currency denominations, we'll assume a predefined set of currency denominations (e.g., in India: ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, ₹1). 
The goal is to break the input number into the largest possible denominations.

Parameters: amount 1465, denominations = [500, 100, 50, 20, 10, 5, 1]
*/


// greedy algorithm
let amount = 1465
const denominations = [500, 100, 50, 20, 10, 5, 1]

function getMaxDenominations(amount, denominations) {

    const result = {}

    for (value of denominations) {
        if (amount >= value) {
            let response = Math.floor(amount / value)
            result[value] = response
            amount = amount % value
        }
    }
    return result
}

console.log(getMaxDenominations(amount, denominations))



