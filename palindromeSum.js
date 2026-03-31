/*
You are given a string 'S'. Your task is to check whether the string is palindrome or not. For checking palindrome, consider alphabets and numbers only and ignore the symbols and whitespaces.

Note :

String 'S' is NOT case sensitive.
Example :

Let S = “c1 O$d@eeD o1c”.
If we ignore the special characters, whitespaces and convert all uppercase letters to lowercase, we get S = “c1odeedo1c”, which is a palindrome. Hence, the given string is also a palindrome.
Detailed explanation ( Input/output format, Notes, Images )
Constraints :
1 <= T <= 100 
1 <= Length(S) <= 10^4

Where 'T' denotes the number of test cases and 'S' denotes the given string.

Time Limit : 1 sec
Sample Input 1 :
2
N2 i&nJA?a& jnI2n
A1b22Ba
Sample Output 1 :
Yes
No
Explanation 1 :
For the first test case, S = “N2 i&nJA?a& jnI2n”. If we ignore the special characters, whitespaces and convert all uppercase letters to lowercase, we get S = “n2injaajni2n”, which is a palindrome. Hence, the given string is also a palindrome.

For the second test case, S = “A1b22Ba”. If we ignore the special characters, whitespaces and convert all uppercase letters to lowercase, we get S = “a1b22ba”, which is not a palindrome. Hence, the given string is not a palindrome.
Sample Input 2 :
3
codingninjassajNiNgNidoc
5?36@6?35
aaBBa@
Sample Output 2 :
Yes
Yes
No
*/

let S = "c1 O$d @eeD or1c"
let main = S.toLowerCase()
let mainValue = main.split(' ').join('').replace(/[^a-zA-Z0-9]/g, '')

function tocheckPalindrome(mainValue) {
    let i = 0
    let j = mainValue.length - 1
    while (i < j) {
        console.log(i, j, 'i and j value')
        if (mainValue[i] !== mainValue[j]) {
            return ' No'
        }
        i++
        j--
    }
    return 'Yes'
}
console.log(tocheckPalindrome(mainValue), 'tocheck palindrome')
