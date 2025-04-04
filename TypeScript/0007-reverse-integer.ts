function reverse(x: number): number {
    let result = 0;

    while (x !== 0) {
        const digit = x % 10;
        x = (x / 10) | 0; // Truncate towards zero

        // Check for 32-bit signed integer overflow
        if (result > 214748364 || (result === 214748364 && digit > 7)) return 0;
        if (result < -214748364 || (result === -214748364 && digit < -8)) return 0;

        result = result * 10 + digit;
    }

    return result;
}
