/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to keep track of opening brackets
    const stack = [];
    // Hash map for keeping track of mappings. This makes the code cleaner.
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate over the string
    for (let char of s) {
        // If the current character is a closing bracket
        if (char in bracketMap) {
            // Pop the topmost element from the stack. If the stack is empty, assign a dummy value '#'
            const topElement = stack.length === 0 ? '#' : stack.pop();
            
            // Check if the opening bracket matches the corresponding closing bracket
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // It's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};

module.exports = { isValid };

