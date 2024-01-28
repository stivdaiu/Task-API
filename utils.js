"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNumbers = exports.isPrime = exports.isPalindrome = void 0;
function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
        i += 6;
    }
    return true;
}
exports.isPrime = isPrime;
function findNumbers(minNumber, maxNumber, feature) {
    const result = [];
    for (let i = minNumber; i <= maxNumber; i++) {
        if (feature.includes('palindrome') && isPalindrome(i)) {
            result.push(i);
        }
        else if (feature.includes('prime') && isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}
exports.findNumbers = findNumbers;
