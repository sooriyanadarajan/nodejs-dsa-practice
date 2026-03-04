
// Sort this array based on last digit only: o/p : [91, 52, 83, 34, 17]

const input = [34, 91, 52, 17, 83]

for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input.length - 1 - i; j++) {
        if (Math.floor(input[j] / 10) > Math.floor(input[j + 1] / 10)) {
            [input[j], input[j + 1]] = [input[j + 1], input[j]]
        }
    }
}

console.log(input, 'sorted based on last digit')

// sort in descending order [4, 1, 7, 3, 9]

const valueOfDescending = [4, 1, 7, 3, 9]
function descendingSorting(valueOfDescending) {
    for (let i = 0; i < valueOfDescending.length - 1; i++) {
        for (let j = 0; j < valueOfDescending.length - i - 1; j++) {
            if (valueOfDescending[j] < valueOfDescending[j + 1]) {
                [valueOfDescending[j], valueOfDescending[j + 1]] = [valueOfDescending[j + 1], valueOfDescending[j]]
            }
        }
    }
    return valueOfDescending
}

console.log(descendingSorting(valueOfDescending))

// Count Number of Swaps Input: [3, 2, 1]  Output: Sorted: [1, 2, 3] Swaps: 3

const InputSwap = [3, 2, 1]
function swapResult(InputSwap) {
    let swaps = false
    for (let i = 0; i < InputSwap.length - 1; i++) {
        for (let j = 0; j < InputSwap.length - 1 - i; j++) {

            if (InputSwap[j] > InputSwap[j + 1]) {
                [InputSwap[j], InputSwap[j + 1]] = [InputSwap[j + 1], InputSwap[j]]
                swaps++
            }
        }
    }
    return {
        sortedArray: InputSwap,
        swapResult: swaps
    }
}
console.log(swapResult(InputSwap))


// Check the  array is already sorted or not: [1, 2, 3, 4, 5]
const sortedArray = [1, 2, 3, 4, 5]

function TochecktheArrayisSorted(sortedArray) {
    let sort = false
    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                sort = true
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]]

            }
        }
    }
    return {
        sorted: sort
    }
}

console.log(TochecktheArrayisSorted(sortedArray))

// Move All Zeros to End  Input: [0, 1, 0, 3, 12]
const moveInput = [0, 1, 9, 0, 3, 12]
function ToMoveZerotoEnd(moveInput) {
    for (let i = 0; i < moveInput.length - 1; i++) {
        for (let j = 0; j < moveInput.length - 1 - i; j++) {
            if (moveInput[j] == 0) {
                [moveInput[j], moveInput[j + 1]] = [moveInput[j + 1], moveInput[j]]
            } else if (moveInput[j] > moveInput[j + 1] && moveInput[j + 1] !== 0) { // this if added if incase need to add sorting logic means
                [moveInput[j], moveInput[j + 1]] = [moveInput[j + 1], moveInput[j]]

            }
        }
    }
    return moveInput
}

console.log(ToMoveZerotoEnd(moveInput))

//Sort Based on Last Digit ip: [34, 91, 52, 17, 83] op: [91, 52, 83, 34, 17]

const lastDigit = [34, 91, 52, 17, 83]
function SortBasedonLastDigit(lastDigit) {
    for (let i = 0; i < lastDigit.length - 1; i++) {
        for (let j = 0; j < lastDigit.length - 1 - i; j++) {
            if (lastDigit[j] % 10 > lastDigit[j + 1] % 10) {
                [lastDigit[j], lastDigit[j + 1]] = [lastDigit[j + 1], lastDigit[j]]
            }
        }
    }
    return lastDigit
}

// Sort Even Numbers Only Input: [5, 2, 8, 1, 4]  Output: [5, 2, 4, 1, 8]

const evenNumbers = [5, 2, 8, 1, 4]

function sortOnlyEvenNumbers(evenNumbers) {
    for (let i = 0; i < evenNumbers.length - 1; i++) {
        for (let j = 0; j < evenNumbers.length - 1 - i; j++) {
            if (evenNumbers[j] % 2 === 0 && evenNumbers[j + 1] % 2 === 0 && evenNumbers[j] > evenNumbers[j + 1]) {
                console.log(j, j + 1)
                [evenNumbers[j], evenNumbers[j + 1]] = [evenNumbers[j + 1], evenNumbers[j]]
            }

        }
    }
    return evenNumbers
}

console.log(sortOnlyEvenNumbers(evenNumbers))

// Sort Array of Strings by Length  Input: ["apple", "kiwi", "banana", "fig"]

const sortLength = ["apple", "kiwi", "banana", "fig"]
function sortByLength(sortLength) {
    for (let i = 0; i < sortLength.length - 1; i++) {
        for (let j = 0; j < sortLength.length - 1 - i; j++) {
            if (sortLength[j].length > sortLength[j + 1].length) {
                [sortLength[j], sortLength[j + 1]] = [sortLength[j + 1], sortLength[j]]
            }
        }
    }
    return sortLength
}

console.log(sortByLength(sortLength))

// Sort Based on Absolute Value   Input:[-10, 5, -3, 2]
const absoluteValue = [-10, 5, -3, 2]
function sortBasedonAbsoluteValue(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if ((Math.abs(arr[j])) > (Math.abs(arr[j + 1]))) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return absoluteValue

}

console.log(sortBasedonAbsoluteValue(absoluteValue))

// Push Negative Numbers to Left  [3, -1, 4, -5, 2]  -- same logic of bubble sorting.

//  Sort Only Odd Numbers I/p: [7, 2, 5, 4, 3] Output: [3, 2, 5, 4, 7]

const oddNumbers = [7, 2, 5, 4, 3]
function toSortOddNumbers(oddNumbers) {

    let oddNumbers = []
    for (let a of oddNumbers) {
        if (a % 2 !== 0) {
            oddNumbers.push(a)
        }
    }
    for (let i = 0; i < oddNumbers.length - 1; i++) {
        for (let j = 0; j < oddNumbers.length - 1 - i; j++) {
            if (oddNumbers[j] % 2 !== 0 && oddNumbers[j + 1] % 2 !== 0 && oddNumbers[j > oddNumbers[j + 1]]) {
                [oddNumbers[j], oddNumbers[j + 1]] = [oddNumbers[j + 1], oddNumbers[j]]
            }
        }
    }
    return oddNumbers
}

console.log(toSortOddNumbers(oddNumbers))

