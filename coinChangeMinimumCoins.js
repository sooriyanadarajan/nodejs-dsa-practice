
/* Coin Change – Minimum Coins

You are given an array of coin denominations and a total amount.
Return the minimum number of coins required to make that amount.
If it’s not possible, return -1.
*/

let coins = [1, 2, 5]
const total = 11
// Output: 3  (5 + 5 + 1)
let sum = {}
let totalCoins

function tofindtheTotalAmount(coins, total) {
    coins.sort((a, b) => b - a)

    for (let possible of coins) {
        if (possible <= total) {
            sum[possible] = Math.floor(total / possible)
            total = total % possible
        }
    }
    totalCoins = Object.values(sum).reduce((a, b) => a + b, 0)
    let keysvalue = Object.keys(sum)
    return { totalCoins, keysvalue }
}
console.log(tofindtheTotalAmount(coins, total))


