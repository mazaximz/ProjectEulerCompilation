'use strict';
function largestPalindromeProduct(n) {

    let current_number = 10 ** (2 * n) - 1;
    while (true) {
        if (isPalindrome(current_number)) {
            if (isProducts(current_number, n)) {
                return current_number;
            }
        }
        current_number--;
    }
    return false;
}

function isPalindrome(x) {

    let x_str = x.toString();
    let x_str_reversed = reverseString(x_str);
    if (x_str_reversed === x_str) {
        return true
    }
    return false
}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function isProducts(x, n) {
    let i = 10 ** n - 1; let j = 10 ** n - 1;

    while (true) {
        if (x > i * j || i < 10 ** (n - 1)) {
            return false
        } else if (x == i * j) {
            return true
        } else {
            j--;
            while (x > i * j && j >= 10 ** (n - 1)) {
                if (x >= i * j) {
                    if (x > i * j) {
                        i--
                        j = i
                    }
                    break
                }
            }
        }
    }
}
exports.largestPalindromeProduct = largestPalindromeProduct;