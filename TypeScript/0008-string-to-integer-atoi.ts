function myAtoi(s: string): number {
    let i = 0;
    const n = s.length;
    let sign = 1;
    let num = 0;

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

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
        const digit = s.charCodeAt(i) - '0'.charCodeAt(0);

        if (num > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    return sign * num;
}
