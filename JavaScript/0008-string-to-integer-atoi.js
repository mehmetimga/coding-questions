function myAtoi(s) {
    let i = 0;
    const n = s.length;
    let sign = 1;
    let num = 0;

    // 1. Skip leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. Handle optional sign
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Convert digits and handle overflow
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        if (num > (Math.pow(2, 31) - 1 - digit) / 10) {
            return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
        }

        num = num * 10 + digit;
        i++;
    }

    return sign * num;
}
