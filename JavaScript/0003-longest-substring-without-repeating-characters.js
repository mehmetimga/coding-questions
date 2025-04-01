function lengthOfLongestSubstring(s) {
    const map = new Map();
    let left = 0;
    let maxLen = 0;

    for (let index = 0; index < s.length; index++) {
        const char = s[index];

        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }

        map.set(char, index);
        maxLen = Math.max(maxLen, index - left + 1);
    }

    return maxLen;
}

// Example usage:
const input = "abcabcbb";
console.log("Length of longest substring without repeating characters:", lengthOfLongestSubstring(input));
