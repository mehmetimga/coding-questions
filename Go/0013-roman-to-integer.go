package main

import "fmt"

func romanToInt(s string) int {
	// Define the value of each Roman numeral
	romanValues := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	result := 0
	prevValue := 0

	// Traverse the string from right to left
	for i := len(s) - 1; i >= 0; i-- {
		currentValue := romanValues[s[i]]

		// If current value is greater than or equal to the previous value,
		// add the current value
		if currentValue >= prevValue {
			result += currentValue
		} else {
			// If current value is less than the previous value,
			// subtract the current value (for cases like IV, IX, etc.)
			result -= currentValue
		}

		prevValue = currentValue
	}

	return result
}

func main() {
	// Test cases
	testCases := []string{"III", "IV", "IX", "LVIII", "MCMXCIV"}

	for _, roman := range testCases {
		fmt.Printf("%s -> %d\n", roman, romanToInt(roman))
	}
}
