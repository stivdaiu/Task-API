export function isPalindrome(num: number): boolean {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

export function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

export function findNumbers(minNumber: number, maxNumber: number, feature: string[]): number[] {
    const result: number[] = [];
    for (let i = minNumber; i <= maxNumber; i++) {
        if (feature.includes('palindrome') && isPalindrome(i)) {
            result.push(i);
        } else if (feature.includes('prime') && isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}
