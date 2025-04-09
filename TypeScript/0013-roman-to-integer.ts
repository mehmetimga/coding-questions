/**
 * Converts a Roman numeral string to an integer
 * @param s The Roman numeral string to convert
 * @return The integer value
 */
function romanToInt(s: string): number {
    // Define the value of each Roman numeral
    const romanValues: Map<string, number> = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    let result: number = 0;
    let prevValue: number = 0;
    
    // Traverse the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue: number = romanValues.get(s[i]) || 0;
        
        // If current value is greater than or equal to the previous value,
        // add the current value
        if (currentValue >= prevValue) {
            result += currentValue;
        } else {
            // If current value is less than the previous value,
            // subtract the current value (for cases like IV, IX, etc.)
            result -= currentValue;
        }
        
        prevValue = currentValue;
    }
    
    return result;
}

// Test cases
const testCases: string[] = ["III", "IV", "IX", "LVIII", "MCMXCIV"];
testCases.forEach(roman => {
    console.log(`${roman} -> ${romanToInt(roman)}`);
});