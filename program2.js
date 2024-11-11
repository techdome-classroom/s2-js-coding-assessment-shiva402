/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Map of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current and next Roman numeral
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];
        
        // If current value is less than the next value, subtract it; otherwise, add it
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    
    return total;
};

module.exports = { romanToInt };
