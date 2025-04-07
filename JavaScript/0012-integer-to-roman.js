/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // Define value-symbol pairs in descending order
    const valueSymbols = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    
    let result = '';
    
    // Build the Roman numeral string
    for (const { value, symbol } of valueSymbols) {
        while (num >= value) {
            num -= value;
            result += symbol;
        }
    }
    
    return result;
};

// Test cases
const testCases = [3, 4, 9, 58, 1994, 3999];
testCases.forEach(num => {
    console.log(`${num} -> ${intToRoman(num)}`);
});