function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let result = "";

    for (let j = 0; j < strs[0].length; j++) {
        const char = strs[0][j];

        for (let i = 1; i < strs.length; i++) {
            if (j >= strs[i].length || strs[i][j] !== char) {
                return result;
            }
        }

        result += char;
    }

    return result;
}
