def reverse(x: int) -> int:
    result = 0
    sign = -1 if x < 0 else 1
    x = abs(x)

    while x != 0:
        digit = x % 10
        x //= 10

        # Check for overflow
        if result > (2**31 - 1 - digit) // 10:
            return 0

        result = result * 10 + digit

    return sign * result
