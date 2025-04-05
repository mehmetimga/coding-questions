function isPalindrome(x: number): boolean {
    // Negative numbers and numbers ending with 0 (except 0 itself) cannot be palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;
    // Reverse the second half of the number and compare with the first half
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // Return true if the first half equals the reversed second half
    // or if the first half equals the reversed second half without the middle digit (for odd-length numbers)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
