import (
	"math"
	"unicode"
)

func myAtoi(s string) int {
	i := 0
	n := len(s)
	sign := 1
	num := 0

	// 1. Skip leading whitespaces
	for i < n && s[i] == ' ' {
		i++
	}

	// 2. Handle optional sign
	if i < n && (s[i] == '+' || s[i] == '-') {
		if s[i] == '-' {
			sign = -1
		}
		i++
	}

	// 3. Convert digits and handle overflow
	for i < n && unicode.IsDigit(rune(s[i])) {
		digit := int(s[i] - '0')

		if num > (math.MaxInt32-digit)/10 {
			if sign == 1 {
				return math.MaxInt32
			}
			return math.MinInt32
		}

		num = num*10 + digit
		i++
	}

	return sign * num
}
