def myAtoi(s: str) -> int:
    i = 0
    n = len(s)
    sign = 1
    num = 0

    INT_MAX = 2**31 - 1
    INT_MIN = -2**31

    # 1. Skip leading whitespaces
    while i < n and s[i] == ' ':
        i += 1

    # 2. Handle optional sign
    if i < n and (s[i] == '+' or s[i] == '-'):
        sign = -1 if s[i] == '-' else 1
        i += 1

    # 3. Parse digits
    while i < n and s[i].isdigit():
        digit = int(s[i])

        # 4. Handle overflow
        if num > (INT_MAX - digit) // 10:
            return INT_MAX if sign == 1 else INT_MIN

        num = num * 10 + digit
        i += 1

    return sign * num
