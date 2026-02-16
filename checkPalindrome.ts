// to check the string is palindrome or not
function isPalindrome(s: string): boolean{
    let i = 0;
    let j = s.length-1
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
    return true
    }
}

console.log(isPalindrome('mom'))

// to check the duplicates in array
function isDuplicatesCheck(value: string): object[] {
    const seen = {}
    const duplicates = []
    for (let v of value) {
        if (seen[v]) duplicates.push(v)
        seen[v] = true
    }
    return duplicates
}
console.log(isDuplicatesCheck('sooriya'))