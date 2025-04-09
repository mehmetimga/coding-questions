/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Define the value of each Roman numeral
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    let prevValue = 0;
    
    // Traverse the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanValues[s[i]];
        
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
};

// Test cases
const testCases = ["III", "IV", "IX", "LVIII", "MCMXCIV"];
testCases.forEach(roman => {
    console.log(`${roman} -> ${romanToInt(roman)}`);
});