package main

import "fmt"

func intToRoman(num int) string {
	// Define the value-symbol pairs in descending order
	valueSymbols := []struct {
		Value  int
		Symbol string
	}{
		{1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"},
		{100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"},
		{10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"},
	}

	// Build the Roman numeral string
	result := ""
	for _, vs := range valueSymbols {
		// While the current value can be subtracted from num
		for num >= vs.Value {
			num -= vs.Value
			result += vs.Symbol
		}
	}
	return result
}

func main() {
	// Test cases
	testCases := []int{3, 4, 9, 58, 1994, 3999}

	for _, num := range testCases {
		fmt.Printf("%d -> %s\n", num, intToRoman(num))
	}
}
