var reverse = function(x) {
    let result = 0;

    while (x !== 0) {
        let digit = x % 10;
        // Truncate x toward zero (to handle negatives)
        x = (x / 10) | 0;

        // Check for 32-bit overflow
        if (result > 214748364 || (result === 214748364 && digit > 7)) return 0;
        if (result < -214748364 || (result === -214748364 && digit < -8)) return 0;

        result = result * 10 + digit;
    }

    return result;
};
