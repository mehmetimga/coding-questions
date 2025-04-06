function isMatch(text: string, pattern: string): boolean {
    const m = text.length, n = pattern.length;
    const dp: boolean[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // Base case: empty text and empty pattern match
    dp[0][0] = true;

    // Handle patterns like a*, a*b*, etc., that can match an empty string
    for (let j = 2; j <= n; j++) {
        if (pattern[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (pattern[j - 1] === text[i - 1] || pattern[j - 1] === '.') {
                // Characters match or pattern has '.'
                dp[i][j] = dp[i - 1][j - 1];
            } else if (pattern[j - 1] === '*') {
                // '*' can match zero or more of the preceding element
                dp[i][j] = dp[i][j - 2] || 
                           ((pattern[j - 2] === text[i - 1] || pattern[j - 2] === '.') && dp[i - 1][j]);
            }
        }
    }

    return dp[m][n];
}